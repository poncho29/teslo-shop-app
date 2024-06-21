import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string
  }
}

export default function CategoryDetailPage({ params }: Props) {
  const { id } = params;

  if (id === 'kids') notFound();
  
  return (
    <div>
      <h1>Category Detail Page</h1>
    </div>
  );
}