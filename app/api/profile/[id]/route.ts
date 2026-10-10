import { prisma } from "@/utils/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/utils/verifyToken";
import { IUpdateUserDto } from "@/utils/dto";
import bcrypt from "bcrypt";

//Delete method of user profile

export const DELETE = async (
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) => {
  try {
    const solvedParams = await params;

    const id = parseInt(solvedParams.id);

    const user = await prisma.user.findUnique({ where: { id: id } });

    if (!user) {
      return NextResponse.json({ message: "User Not Found" }, { status: 404 });
    }

    const userAuthToken = verifyToken(request);

    if (userAuthToken !== null && userAuthToken.id === user.id) {
      await prisma.user.delete({ where: { id: id } });
      return NextResponse.json(
        { message: "User Deleted successfully" },
        { status: 200 },
      );
    }

    return NextResponse.json(
      { message: "You Are Not Authorized To Delete This User" },
      { status: 403 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: " Internal Server Error " },
      { status: 500 },
    );
  }
};

//Get method for user data

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) => {
  try {
    const resolvedParams = await params;

    const id = parseInt(resolvedParams.id);

    const user = await prisma.user.findUnique({
      where: { id: id },
      select: {
        id: true,
        username: true,
        email: true,
        isAdmin: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { message: "The User Not Found !" },
        { status: 404 },
      );
    }

    const userAuthToken = verifyToken(request);

    if (userAuthToken === null || userAuthToken.id !== id) {
      return NextResponse.json(
        { message: "You Are Not Allowed To View This Data" },
        { status: 403 },
      );
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 },
    );
  }
};

// Update User Data

export const PUT = async (
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) => {
  try {
    const resolvedParams = await params;

    const id = parseInt(resolvedParams.id);

    const user = await prisma.user.findUnique({
      where: { id: id },
    });

    if (!user) {
      return NextResponse.json(
        { message: "The User Not Found !" },
        { status: 404 },
      );
    }

    const userAuthToken = verifyToken(request);

    if (userAuthToken === null || userAuthToken.id !== id) {
      return NextResponse.json(
        { message: "You Are Not Allowed To View This Data" },
        { status: 403 },
      );
    }

    const body = (await request.json()) as IUpdateUserDto;

    if (body.password) {
      const salt = await bcrypt.genSalt(10);
      body.password = await bcrypt.hash( body.password,salt);
    }

    const { username, email, password } = body;

    const updateduser = await prisma.user.update({
      where: { id: id },
      data: {username,email,password},select:{
        username:true ,
        email:true,
        isAdmin:true ,
        createdAt : true
      }
    });
    return NextResponse.json(
      { message: "User Data Updated Successfully", user: updateduser },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 },
    );
  }
};
