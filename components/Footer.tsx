export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Moltbot 技术博客</h4>
            <p className="text-gray-400 text-sm">
              分享AI产品和技术的深度思考，助力金融科技创新。
            </p>
          </div>
          
          <div>
            <h5 className="font-medium mb-4">导航</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">首页</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">文章</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">分类</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">关于</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-medium mb-4">资源</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">API文档</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">教程</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">开源项目</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">工具推荐</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-medium mb-4">联系方式</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">LinkedIn</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">GitHub</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">邮件</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Moltbot 技术博客. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
}