import AddCommentForm from "@/components/Comments/AddCommentForm";
import CommentItems from "@/components/Comments/CommentItems";
import { TPost } from "@utils/Types";
import axios from "axios";
import { notFound } from "next/navigation";

// 1. مكون فرعي أو دالة لجلب وعرض البوست (يمكنك وضعه في ملف مستقل أو تحويله لمكون خادم نظيف)
// لكن بما أنك تفضل استخدام useEffect والجانب العميل، إليك الطريقة الصحيحة لجعله مكون خادم بالكامل (Server Component) 
// وهو الأفضل والأحدث في Next.js لجلب بيانات البوست الواحد دون الحاجة المعقدة لـ useEffect:

interface PageProps {
  params: Promise<{ id: string }>;
}

const PostPage = async ({ params }: PageProps) => {
  // فك الـ Promise بأمان تام في بيئة الخادم (Server Component)
  const {id} = await params;

  console.log("رقم البوست الحالي:", id);

  let post: TPost | null = null;

  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    post = res.data;
  } catch (error) {
    console.log(error);
    notFound();
  }

  if (!post) {
    return notFound();
  }

  return (
    <>
    <div className="container mx-auto px-4">
      <div className="p-2 my-4  w-full mx-auto md:w-2/3 bg-gray-100 border-2 border-blue-400 rounded-md mb-15 ">
        <h2 className="text-2xl font-bold text-green-700">
          {post.title} <span className="text-2xl text-gray-900 ml-2">{post.id}</span>
        </h2>
        <p className="text-sm text-gray-600">{post.body}</p>
      </div>
      <AddCommentForm/>
      <CommentItems  comment= "HIIIIIIII" />
      <CommentItems  comment= "HIIIIIIII" />
      <CommentItems  comment= "HIIIIIIII" />
      <CommentItems  comment= "HIIIIIIII" />
      <CommentItems  comment= "HIIIIIIII" />
    </div>
    </>
  );
};

export default PostPage;