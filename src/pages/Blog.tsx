import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Tag, Calendar, Clock, User, ChevronRight, BookOpen } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Essential Tips for Your G2 Road Test',
    excerpt: 'Master the most common challenges in the G2 road test with our comprehensive guide.',
    category: 'Road Tests',
    author: 'Sarah Johnson',
    date: 'March 15, 2024',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1000&h=600'
  },
  {
    id: '2',
    title: 'Winter Driving Safety Guide',
    excerpt: 'Learn how to stay safe on the roads during harsh Canadian winters with these expert tips.',
    category: 'Safety',
    author: 'Michael Chen',
    date: 'March 10, 2024',
    readTime: '7 min read',
    imageUrl: 'https://images.unsplash.com/photo-1521410843026-323be9ead002?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '3',
    title: 'Understanding Ontarios Driving Laws',
    excerpt: 'A comprehensive overview of the latest driving regulations in Ontario.',
    category: 'Laws & Regulations',
    author: 'David Smith',
    date: 'March 5, 2024',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1578041262130-633307b3bfd6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '4',
    title: 'Common Mistakes to Avoid in Your G Test',
    excerpt: 'Dont let these frequent errors cost you your G license. Learn what to watch out for.',
    category: 'Road Tests',
    author: 'Emily Wilson',
    date: 'March 1, 2024',
    readTime: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1000&h=600'
  },
  {
    id: '5',
    title: 'Parallel Parking Made Simple',
    excerpt: 'Master the art of parallel parking with our step-by-step guide.',
    category: 'Driving Skills',
    author: 'James Lee',
    date: 'February 28, 2024',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1532004252750-b411a84c8a41?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '6',
    title: 'Eco-Friendly Driving Habits',
    excerpt: 'Reduce your carbon footprint while saving money on fuel with these driving tips.',
    category: 'Tips & Tricks',
    author: 'Lisa Green',
    date: 'February 25, 2024',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1604447199408-9798f9f64f88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

const CATEGORIES = [
  'All Posts',
  'Road Tests',
  'Safety',
  'Laws & Regulations',
  'Driving Skills',
  'Tips & Tricks'
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Posts');

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All Posts' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative pt-28 pb-20 bg-[#2c3149] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/patterns/texture-dots.png')] opacity-[0.03]" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#2c3149] via-[#2c3149] to-[#1a1f33]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
            >
              <BookOpen className="w-5 h-5 text-yellow-500" />
              <span className="text-white font-medium">Latest Articles</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Driving School <span className="text-yellow-500">Blog</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-300 mb-8"
            >
              Expert tips, insights, and updates from our professional driving instructors
            </motion.p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? 'bg-[#2c3149] text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm text-yellow-500">{post.category}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2 text-[#2c3149] line-clamp-2 group-hover:text-yellow-500 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <button className="text-[#2c3149] hover:text-yellow-500 font-medium text-sm inline-flex items-center gap-1 group">
                    Read More
                    <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog; 