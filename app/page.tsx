'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import ArticleCard from '@/components/ArticleCard';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

// 模拟文章数据
const mockArticles = [
  {
    id: 1,
    title: '大模型在金融领域的应用实践',
    excerpt: '探讨大语言模型如何改变金融行业的数据分析、风险评估和客户服务',
    content: '随着人工智能技术的快速发展，大语言模型在金融领域的应用越来越广泛...',
    author: '产品经理',
    date: '2024-01-29',
    tags: ['AI', '金融', '大模型'],
    readTime: '8 分钟',
  },
  {
    id: 2,
    title: '自然语言查询系统的架构设计',
    excerpt: '从零开始构建一个支持自然语言查询的金融数据系统',
    content: '构建自然语言查询系统需要解决多个技术难点，包括语义理解、数据库映射等...',
    author: '产品经理',
    date: '2024-01-28',
    tags: ['NLP', '架构', '数据库'],
    readTime: '12 分钟',
  },
  {
    id: 3,
    title: 'AI产品经理必备的技术知识',
    excerpt: '作为懂技术的AI产品经理，需要掌握哪些关键技术概念',
    content: '在AI产品开发过程中，产品经理需要与工程师紧密协作...',
    author: '产品经理',
    date: '2024-01-27',
    tags: ['AI', '产品管理', '技术'],
    readTime: '6 分钟',
  },
];

export default function Home() {
  const [articles, setArticles] = useState(mockArticles);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // 提取所有标签
  const allTags = Array.from(new Set(mockArticles.flatMap(article => article.tags)));

  // 根据选中的标签过滤文章
  const filteredArticles = selectedTag
    ? articles.filter(article => article.tags.includes(selectedTag))
    : articles;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* 主内容区 */}
          <main className="flex-1">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">技术博客</h1>
              <p className="text-gray-600">分享AI产品和技术的深度思考</p>
            </div>
            
            {/* 标签筛选器 */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2">
                <button 
                  onClick={() => setSelectedTag(null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    selectedTag === null 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  全部
                </button>
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      selectedTag === tag
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            
            {/* 文章列表 */}
            <div className="space-y-6">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </main>
          
          {/* 侧边栏 */}
          <Sidebar />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}