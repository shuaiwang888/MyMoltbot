import Link from 'next/link';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  tags: string[];
  readTime: string;
}

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-gray-500">{article.date}</span>
          <span className="text-sm text-gray-500">{article.readTime}</span>
        </div>
        
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          <Link href={`/article/${article.id}`} className="hover:text-blue-600">
            {article.title}
          </Link>
        </h2>
        
        <p className="text-gray-600 mb-4">{article.excerpt}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-700">作者: {article.author}</span>
          <Link 
            href={`/article/${article.id}`} 
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            阅读全文 →
          </Link>
        </div>
      </div>
    </article>
  );
}