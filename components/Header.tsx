import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-blue-600">
            Moltbot 技术博客
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">首页</Link></li>
              <li><Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">关于</Link></li>
              <li><Link href="/categories" className="text-gray-700 hover:text-blue-600 font-medium">分类</Link></li>
              <li><Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">联系</Link></li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">
              写文章
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}