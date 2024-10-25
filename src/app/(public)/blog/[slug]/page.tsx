const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  return <div>slug / {slug}</div>;
};

export default page;
