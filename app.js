import React, { useState } from 'react';
import { Search, Menu, X, Clock, TrendingUp, Eye, ChevronRight } from 'lucide-react';

export default function SwapnobhumiNews() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const categories = [
    'Bangladesh', 'International', 'Sports', 'Opinion', 
    'Business', 'Youth', 'Entertainment', 'Lifestyle', 'Fact Check'
  ];

  const featuredNews = [
    {
      id: 1,
      title: 'ঢাকায় মেট্রোরেল সম্প্রসারণে নতুন পরিকল্পনা ঘোষণা',
      excerpt: 'রাজধানীর যোগাযোগ ব্যবস্থা উন্নয়নে মেট্রোরেল নেটওয়ার্ক সম্প্রসারণের বড় উদ্যোগ নিয়েছে সরকার',
      category: 'Bangladesh',
      image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&h=450&fit=crop',
      time: '১৫ মিনিট আগে',
      views: '২.৫ হাজার'
    },
    {
      id: 2,
      title: 'বাংলাদেশ-ভারত বাণিজ্য চুক্তিতে নতুন অগ্রগতি',
      excerpt: 'দ্বিপক্ষীয় বাণিজ্য সম্পর্ক আরও মজবুত করতে নতুন চুক্তি স্বাক্ষরিত হয়েছে',
      category: 'International',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=450&fit=crop',
      time: '১ ঘণ্টা আগে',
      views: '১.৮ হাজার'
    },
    {
      id: 3,
      title: 'বাংলাদেশ ক্রিকেট দল আন্তর্জাতিক সিরিজের প্রস্তুতি নিচ্ছে',
      excerpt: 'জাতীয় ক্রিকেট দল আসন্ন টুর্নামেন্টের জন্য নিবিড় প্রশিক্ষণ চালাচ্ছে',
      category: 'Sports',
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&h=450&fit=crop',
      time: '২ ঘণ্টা আগে',
      views: '৩.২ হাজার'
    }
  ];

  const sideNews = [
    {
      id: 4,
      title: 'প্রযুক্তি শিখর সম্মেলনে বৈশ্বিক নেতারা অংশ নিচ্ছেন',
      category: 'Business',
      time: '৩ ঘণ্টা আগে'
    },
    {
      id: 5,
      title: 'শিক্ষা সংস্কার উদ্যোগ সারাদেশে চালু হয়েছে',
      category: 'Youth',
      time: '৪ ঘণ্টা আগে'
    },
    {
      id: 6,
      title: 'স্থানীয় ঐতিহ্য উদযাপনে নতুন সাংস্কৃতিক উৎসব',
      category: 'Entertainment',
      time: '৫ ঘণ্টা আগে'
    },
    {
      id: 7,
      title: 'শীতকালের জন্য স্বাস্থ্য বিশেষজ্ঞদের পরামর্শ',
      category: 'Lifestyle',
      time: '৬ ঘণ্টা আগে'
    },
    {
      id: 8,
      title: 'পরিবেশ সংরক্ষণ প্রকল্পে সফলতার ফল দেখা যাচ্ছে',
      category: 'Bangladesh',
      time: '৭ ঘণ্টা আগে'
    }
  ];

  const latestNews = [
    {
      id: 9,
      title: 'সরকার নতুন নীতি কাঠামো ঘোষণা করেছে',
      excerpt: 'প্রাতিষ্ঠানিক সক্ষমতা শক্তিশালীকরণে ব্যাপক সংস্কার',
      category: 'Bangladesh',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=450&fit=crop',
      time: '৩০ মিনিট আগে'
    },
    {
      id: 10,
      title: 'ঢাকায় নতুন আইটি পার্ক উদ্বোধন',
      excerpt: 'প্রযুক্তি খাতে বিনিয়োগ বাড়াতে আধুনিক সুবিধা সম্বলিত আইটি পার্ক',
      category: 'Business',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=450&fit=crop',
      time: '৪৫ মিনিট আগে'
    },
    {
      id: 11,
      title: 'রাজধানীতে নতুন ক্রীড়া একাডেমি চালু',
      excerpt: 'তরুণ ক্রীড়া প্রতিভা বিকাশে অত্যাধুনিক সুবিধা',
      category: 'Sports',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=450&fit=crop',
      time: '১ ঘণ্টা আগে'
    },
    {
      id: 12,
      title: 'অর্থনৈতিক প্রবৃদ্ধি প্রাক্কলনকে ছাড়িয়ে গেছে',
      excerpt: 'ত্রৈমাসিক তথ্য প্রধান খাতগুলোতে শক্তিশালী কর্মক্ষমতা দেখাচ্ছে',
      category: 'Business',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=450&fit=crop',
      time: '২ ঘণ্টা আগে'
    },
    {
      id: 13,
      title: 'চট্টগ্রাম বন্দরে আধুনিকায়ন কাজ শুরু',
      excerpt: 'আন্তর্জাতিক বাণিজ্য সহজতর করতে বন্দরের সম্প্রসারণ প্রকল্প',
      category: 'Bangladesh',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=450&fit=crop',
      time: '৩ ঘণ্টা আগে'
    },
    {
      id: 14,
      title: 'বিশ্ববিদ্যালয়ে গবেষণা কেন্দ্র স্থাপন',
      excerpt: 'উচ্চশিক্ষা ও গবেষণা উন্নয়নে নতুন উদ্যোগ',
      category: 'Youth',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=450&fit=crop',
      time: '৪ ঘণ্টা আগে'
    },
    {
      id: 15,
      title: 'সিলেটে পর্যটন খাত সম্প্রসারণ পরিকল্পনা',
      excerpt: 'প্রাকৃতিক সৌন্দর্যকে কাজে লাগিয়ে পর্যটন শিল্প বিকাশ',
      category: 'Lifestyle',
      image: 'https://images.unsplash.com/photo-1503891617560-5b8c2e28cbf6?w=800&h=450&fit=crop',
      time: '৫ ঘণ্টা আগে'
    },
    {
      id: 16,
      title: 'জাতীয় ফুটবল দলের নতুন কোচ নিয়োগ',
      excerpt: 'আন্তর্জাতিক অভিজ্ঞতা সম্পন্ন কোচ দলের দায়িত্ব নিলেন',
      category: 'Sports',
      image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=450&fit=crop',
      time: '৬ ঘণ্টা আগে'
    },
    {
      id: 17,
      title: 'রাজশাহীতে সোলার এনার্জি প্রকল্প চালু',
      excerpt: 'নবায়নযোগ্য শক্তি ব্যবহারে বড় পদক্ষেপ',
      category: 'Bangladesh',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=450&fit=crop',
      time: '৭ ঘণ্টা আগে'
    },
    {
      id: 18,
      title: 'ঢাকা চলচ্চিত্র উৎসব শুরু হচ্ছে',
      excerpt: 'দেশি-বিদেশি চলচ্চিত্র প্রদর্শিত হবে উৎসবে',
      category: 'Entertainment',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=450&fit=crop',
      time: '৮ ঘণ্টা আগে'
    },
    {
      id: 19,
      title: 'কৃষি খাতে ডিজিটাল প্রযুক্তির ব্যবহার বৃদ্ধি',
      excerpt: 'আধুনিক কৃষি পদ্ধতিতে কৃষকদের প্রশিক্ষণ কর্মসূচি',
      category: 'Business',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=450&fit=crop',
      time: '৯ ঘণ্টা আগে'
    },
    {
      id: 20,
      title: 'জাতীয় সংগীত উৎসব আয়োজনের ঘোষণা',
      excerpt: 'বাংলাদেশের সংগীত ঐতিহ্য তুলে ধরতে বিশাল আয়োজন',
      category: 'Entertainment',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=450&fit=crop',
      time: '১০ ঘণ্টা আগে'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-red-600 text-white py-2 px-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs sm:text-sm">
          <div className="flex items-center gap-1 sm:gap-2">
            <Clock size={12} className="sm:w-4 sm:h-4" />
            <span className="truncate">Tuesday, Jan 20, 2026</span>
          </div>
          <div className="flex gap-2 sm:gap-4">
            <button className="hover:text-red-200 whitespace-nowrap">ই-পেপার</button>
            <button className="hover:text-red-200">বাংলা</button>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <button 
                className="lg:hidden p-1"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-600">
                  স্বপ্নভূমি নিউজ
                </h1>
                <span className="hidden sm:block text-xs text-gray-600">
                  Swapnobhuminews
                </span>
              </div>
            </div>

            {/* Search and Login */}
            <div className="flex items-center gap-2 sm:gap-4">
              <button 
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 hover:bg-gray-100 rounded-full"
                aria-label="Search"
              >
                <Search size={18} className="sm:w-5 sm:h-5" />
              </button>
              <button className="px-3 py-1.5 sm:px-4 sm:py-2 bg-red-600 text-white text-sm rounded hover:bg-red-700">
                Login
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {searchOpen && (
            <div className="mt-3 sm:mt-4">
              <input
                type="text"
                placeholder="Search news..."
                className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                autoFocus
              />
            </div>
          )}

          {/* Desktop Navigation */}
          <nav className="hidden lg:block mt-4">
            <ul className="flex items-center gap-6 overflow-x-auto">
              {categories.map((cat) => (
                <li key={cat} className="whitespace-nowrap">
                  <a href="#" className="text-gray-700 hover:text-red-600 font-medium">
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden mt-3 pb-2 border-t pt-3">
              <ul className="space-y-1">
                {categories.map((cat) => (
                  <li key={cat}>
                    <a 
                      href="#" 
                      className="flex items-center justify-between py-2.5 px-3 text-gray-700 hover:bg-gray-100 rounded font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {cat}
                      <ChevronRight size={16} />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Main News Section */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Featured Story */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={featuredNews[0].image} 
                alt={featuredNews[0].title}
                className="w-full h-48 sm:h-64 lg:h-96 object-cover"
              />
              <div className="p-4 sm:p-6">
                <span className="inline-block px-2 sm:px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded mb-2">
                  {featuredNews[0].category}
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 hover:text-red-600 cursor-pointer leading-tight">
                  {featuredNews[0].title}
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{featuredNews[0].excerpt}</p>
                <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock size={12} className="sm:w-3.5 sm:h-3.5" />
                    {featuredNews[0].time}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye size={12} className="sm:w-3.5 sm:h-3.5" />
                    {featuredNews[0].views} views
                  </span>
                </div>
              </div>
            </div>

            {/* Secondary Featured Stories */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {featuredNews.slice(1).map((news) => (
                <div key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                  <div className="p-3 sm:p-4">
                    <span className="inline-block px-2 py-1 bg-blue-600 text-white text-xs font-semibold rounded mb-2">
                      {news.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 hover:text-red-600 cursor-pointer leading-tight">
                      {news.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">{news.excerpt}</p>
                    <div className="flex items-center gap-2 sm:gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock size={10} className="sm:w-3 sm:h-3" />
                        {news.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye size={10} className="sm:w-3 sm:h-3" />
                        {news.views}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Latest News Grid */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                <TrendingUp className="text-red-600 w-5 h-5 sm:w-6 sm:h-6" />
                সর্বশেষ সংবাদ
              </h2>
              <div className="grid gap-3 sm:gap-4">
                {latestNews.map((news) => (
                  <div key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <img 
                        src={news.image} 
                        alt={news.title}
                        className="w-full sm:w-48 h-40 sm:h-32 object-cover flex-shrink-0"
                      />
                      <div className="flex-1 p-3 sm:py-3 sm:pr-3">
                        <span className="inline-block px-2 py-1 bg-green-600 text-white text-xs font-semibold rounded mb-2">
                          {news.category}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 hover:text-red-600 cursor-pointer leading-tight">
                          {news.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 mb-2">{news.excerpt}</p>
                        <span className="text-xs text-gray-500">{news.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            {/* Trending */}
            <div className="bg-white rounded-lg shadow-md p-3 sm:p-4">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                <TrendingUp className="text-red-600 w-4 h-4 sm:w-5 sm:h-5" />
                Trending Now
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {sideNews.map((news, index) => (
                  <div key={news.id} className="border-b border-gray-200 pb-3 sm:pb-4 last:border-0 last:pb-0">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <span className="text-xl sm:text-2xl font-bold text-red-600 flex-shrink-0">{index + 1}</span>
                      <div className="min-w-0">
                        <h4 className="text-sm sm:text-base font-semibold text-gray-900 hover:text-red-600 cursor-pointer mb-1 leading-tight">
                          {news.title}
                        </h4>
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs text-gray-500">
                          <span className="px-2 py-0.5 bg-gray-200 rounded whitespace-nowrap">{news.category}</span>
                          <span className="whitespace-nowrap">{news.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-lg shadow-md p-4 sm:p-6 text-white">
              <h3 className="text-lg sm:text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-xs sm:text-sm mb-3 sm:mb-4 text-red-100">Get daily news delivered to your inbox</p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-sm sm:text-base rounded mb-2 sm:mb-3 text-gray-900"
              />
              <button className="w-full bg-white text-red-600 font-semibold py-2 text-sm sm:text-base rounded hover:bg-red-50">
                Subscribe
              </button>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-lg shadow-md p-3 sm:p-4">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Follow Us</h3>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <button className="py-2 px-2 sm:px-4 bg-blue-600 text-white rounded hover:bg-blue-700 text-xs sm:text-sm font-medium">
                  Facebook
                </button>
                <button className="py-2 px-2 sm:px-4 bg-sky-500 text-white rounded hover:bg-sky-600 text-xs sm:text-sm font-medium">
                  Twitter
                </button>
                <button className="py-2 px-2 sm:px-4 bg-red-500 text-white rounded hover:bg-red-600 text-xs sm:text-sm font-medium">
                  YouTube
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-8 sm:mt-12 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6">
            <div className="col-span-2 sm:col-span-1">
              <h4 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-red-500">Swapnobhuminews</h4>
              <p className="text-gray-400 text-xs sm:text-sm">Your trusted source for news and information</p>
            </div>
            <div>
              <h5 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Categories</h5>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Bangladesh</a></li>
                <li><a href="#" className="hover:text-white">International</a></li>
                <li><a href="#" className="hover:text-white">Sports</a></li>
                <li><a href="#" className="hover:text-white">Business</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">About</h5>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Advertise</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h5 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Contact</h5>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                <li>Email: info@swapnobhuminews.com</li>
                <li>Phone: +880 1XXX-XXXXXX</li>
                <li>Address: Dhaka, Bangladesh</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-4 sm:pt-6 text-center text-xs sm:text-sm text-gray-400">
            <p>© 2026 Swapnobhuminews. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}