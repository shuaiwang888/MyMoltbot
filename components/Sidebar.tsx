import Link from 'next/link';

export default function Sidebar() {
  // 模拟热门文章数据
  const popularArticles = [
    {
      id: 1,
      title: '大模型在金融领域的应用实践',
      date: '2024-01-29',
    },
    {
      id: 2,
      title: '自然语言查询系统的架构设计',
      date: '2024-01-28',
    },
    {
      id: 3,
      title: 'AI产品经理必备的技术知识',
      date: '2024-01-27',
    },
  ];

  // 模拟标签数据
  const tags = [
    { name: 'AI', count: 12 },
    { name: '金融', count: 8 },
    { name: '大模型', count: 7 },
    { name: 'NLP', count: 5 },
    { name: '产品管理', count: 9 },
    { name: '架构', count: 4 },
  ];

  return (
    <aside className="md:w-80 space-y-8">
      {/* 关于我 */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">关于我</h3>
        <div className="flex items-center mb-4">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
          <div className="ml-4">
            <h4 className="font-medium text-gray-800">产品经理</h4>
            <p className="text-sm text-gray-600">懂技术的AI产品专家</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm">
          分享关于AI产品、大模型应用和金融科技的深度见解与实践经验。
        </p>
      </div>

      {/* 热门文章 */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">热门文章</h3>
        <ul className="space-y-3">
          {popularArticles.map((article) => (
            <li key={article.id}>
              <Link 
                href={`/article/${article.id}`} 
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                {article.title}
              </Link>
              <p className="text-xs text-gray-500 mt-1">{article.date}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* 标签云 */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">标签</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Link 
              key={index}
              href={`/tags/${tag.name}`}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-blue-100 hover:text-blue-600"
            >
              {tag.name} ({tag.count})
            </Link>
          ))}
        </div>
      </div>

      {/* 订阅 */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">订阅更新</h3>
        <p className="text-gray-600 text-sm mb-4">
          输入邮箱获取最新技术文章和洞见
        </p>
        <div className="flex">
          <input 
            type="email" 
            placeholder="your@email.com" 
            className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md text-sm font-medium">
            订阅
          </button>
        </div>
      </div>
    </aside>
  );
}