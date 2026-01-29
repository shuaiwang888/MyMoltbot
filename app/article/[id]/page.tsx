'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';

// 模拟文章数据
const mockArticles = [
  {
    id: 1,
    title: '大模型在金融领域的应用实践',
    excerpt: '探讨大语言模型如何改变金融行业的数据分析、风险评估和客户服务',
    content: `随着人工智能技术的快速发展，大语言模型在金融领域的应用越来越广泛。从智能客服到风险评估，从市场预测到合规监管，大模型正在深刻改变金融服务的方方面面。

## 智能客户服务

传统金融机构面临着大量客户咨询和服务请求，人力成本高昂且响应速度有限。通过部署基于大语言模型的智能客服系统，金融机构可以实现24小时不间断服务，处理客户的常见问题，如账户查询、交易指导、产品介绍等。

这种系统不仅能够理解客户的自然语言，还能根据客户的账户信息和历史行为提供个性化建议。例如，当客户询问理财产品时，系统可以根据客户的风险偏好、投资历史和财务状况，推荐最适合的产品。

## 风险评估与管理

在风险评估方面，大模型能够分析海量的非结构化数据，如新闻报道、社交媒体情绪、行业报告等，从而更全面地评估市场风险。传统的风险模型主要依赖结构化的历史数据，而大语言模型可以从文本中提取情感倾向、事件影响等关键信息，补充和完善风险评估体系。

此外，大模型还可以自动生成风险报告，帮助风控人员快速了解潜在风险点，并提出相应的应对策略。

## 市场分析与预测

金融市场受到多种因素的影响，包括宏观经济指标、政治事件、自然灾害等。大语言模型可以整合来自不同来源的信息，识别潜在的市场趋势和投资机会。

通过分析财经新闻、研究报告、财报电话会议等内容，模型可以量化市场情绪，预测股票价格走势，甚至发现传统分析方法难以察觉的相关性。

## 合规与监管

金融行业面临着严格的监管要求，合规工作繁琐且容易出错。大语言模型可以帮助自动化合规检查，识别潜在的违规行为，确保业务操作符合相关法规。

例如，模型可以自动审核交易记录，检测异常模式，或分析合同文本，确保条款符合监管要求。

## 未来展望

虽然大语言模型在金融领域的应用前景广阔，但也面临着数据隐私、模型可解释性、监管合规等挑战。未来的发展方向包括提升模型的可解释性、加强数据安全保障、完善监管框架等。

总的来说，大语言模型正在为金融行业带来深刻的变革，推动金融服务向更加智能化、个性化的方向发展。`,
    author: '产品经理',
    date: '2024-01-29',
    tags: ['AI', '金融', '大模型'],
    readTime: '8 分钟',
  },
  {
    id: 2,
    title: '自然语言查询系统的架构设计',
    excerpt: '从零开始构建一个支持自然语言查询的金融数据系统',
    content: `构建自然语言查询系统需要解决多个技术难点，包括语义理解、数据库映射等...`,
    author: '产品经理',
    date: '2024-01-28',
    tags: ['NLP', '架构', '数据库'],
    readTime: '12 分钟',
  },
  {
    id: 3,
    title: 'AI产品经理必备的技术知识',
    excerpt: '作为懂技术的AI产品经理，需要掌握哪些关键技术概念',
    content: `在AI产品开发过程中，产品经理需要与工程师紧密协作...`,
    author: '产品经理',
    date: '2024-01-27',
    tags: ['AI', '产品管理', '技术'],
    readTime: '6 分钟',
  },
];

export default function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 模拟获取文章详情
    const articleId = parseInt(Array.isArray(id) ? id[0] : id);
    const foundArticle = mockArticles.find(a => a.id === articleId);
    
    if (foundArticle) {
      setArticle(foundArticle);
    }
    
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center items-center h-64">
            <p className="text-gray-600">加载中...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center items-center h-64">
            <p className="text-gray-600">文章未找到</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <main className="flex-1">
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">{article.date}</span>
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                </div>
                
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{article.title}</h1>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.map((tag: string) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="prose max-w-none text-gray-700">
                  {article.content.split('\n\n').map((paragraph: string, index: number) => {
                    if (paragraph.startsWith('# ')) {
                      return <h2 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">{paragraph.substring(2)}</h2>;
                    } else if (paragraph.startsWith('## ')) {
                      return <h3 key={index} className="text-xl font-semibold text-gray-800 mt-6 mb-3">{paragraph.substring(3)}</h3>;
                    } else if (paragraph.startsWith('- ') || paragraph.startsWith('* ')) {
                      return <ul key={index} className="list-disc pl-6 mb-4"><li>{paragraph.substring(2)}</li></ul>;
                    } else if (paragraph.trim() === '') {
                      return null;
                    } else {
                      return <p key={index} className="mb-4">{paragraph}</p>;
                    }
                  })}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
                    <div className="ml-4">
                      <h4 className="font-medium text-gray-800">{article.author}</h4>
                      <p className="text-sm text-gray-600">懂技术的AI产品经理</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            
            {/* 评论区 */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">评论</h3>
              <div className="mb-6">
                <textarea 
                  placeholder="分享你的想法..." 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={4}
                ></textarea>
                <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium">
                  发表评论
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center mb-2">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8" />
                    <div className="ml-3">
                      <h4 className="font-medium text-gray-800 text-sm">用户1</h4>
                      <p className="text-xs text-gray-500">2024-01-29</p>
                    </div>
                  </div>
                  <p className="text-gray-600 ml-11">这篇文章很有启发性，特别是关于大模型在风险评估方面的应用部分。</p>
                </div>
                
                <div className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center mb-2">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8" />
                    <div className="ml-3">
                      <h4 className="font-medium text-gray-800 text-sm">用户2</h4>
                      <p className="text-xs text-gray-500">2024-01-28</p>
                    </div>
                  </div>
                  <p className="text-gray-600 ml-11">期待更多关于金融AI应用的深度分析！</p>
                </div>
              </div>
            </div>
          </main>
          
          <Sidebar />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}