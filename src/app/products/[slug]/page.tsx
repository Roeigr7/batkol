"use client";

import { use, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { AccessibilityButton } from '@/components/layout/AccessibilityButton';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { EXPERTISE_ICONS } from '@/lib/constants';
import { useTheme } from '@/context/ThemeContext';

// Type for categories
interface SimpleProduct {
  readonly name: string;
}

interface Product {
  readonly name: string;
  readonly type?: string;
}

interface Subcategory {
  readonly brand: string;
  readonly products: readonly SimpleProduct[];
}

interface Category {
  readonly name: string;
  readonly products: readonly Product[];
  readonly subcategories?: readonly Subcategory[];
}

interface CategoryGroup {
  readonly groupTitle: string;
  readonly categories: readonly Category[];
}

type ProductWithCategories = {
  readonly categories?: readonly Category[];
  readonly categoryGroups?: readonly CategoryGroup[];
}

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const isLightTheme = theme === 'light';
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(text);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const navigateToContact = () => {
    // Use window.location for reliable hash navigation
    window.location.href = '/#contact';
  };

  // Find the product by slug
  const product = EXPERTISE_ICONS.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  // Check if this product has categories (like amplification)
  const hasCategories = 'categories' in product && Array.isArray((product as unknown as ProductWithCategories).categories);
  const hasCategoryGroups = 'categoryGroups' in product && Array.isArray((product as unknown as ProductWithCategories).categoryGroups);
  
  const categories: readonly Category[] = hasCategories 
    ? ((product as unknown as ProductWithCategories).categories ?? []) 
    : [];
  
  const categoryGroups: readonly CategoryGroup[] = hasCategoryGroups 
    ? ((product as unknown as ProductWithCategories).categoryGroups ?? []) 
    : [];

  // Flatten categories from groups for easy lookup
  const allCategoriesFromGroups: readonly Category[] = categoryGroups.flatMap(group => group.categories);

  const toggleCategory = (categoryName: string) => {
    setActiveCategory(activeCategory === categoryName ? null : categoryName);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Hero Section with Background Image */}
        <section className="relative py-16 sm:py-20 overflow-hidden">
          {/* Background Image */}
          <div className={`absolute inset-0 ${isLightTheme ? 'bg-gradient-to-br from-[#f8f6f5] to-[#f0ebe8]' : 'bg-black'}`}>
            <div 
              className={`absolute inset-0 bg-cover bg-center ${isLightTheme ? 'opacity-10' : 'opacity-20'}`}
              style={{ 
                backgroundImage: `url(${product.bg})`,
              }}
            />
            {/* Orange tint overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${isLightTheme ? 'from-[#d97e00]/5 to-[#bf1a22]/5' : 'from-[#d97e00]/10 to-transparent'}`} />
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-6">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <ol className="flex items-center gap-2 text-base">
                <li>
                  <Link href="/" className={`${isLightTheme ? 'text-gray-500 hover:text-gray-700' : 'text-white/70 hover:text-white'} transition-colors`}>
                    דף הבית
                  </Link>
                </li>
                <li className={isLightTheme ? 'text-gray-400' : 'text-white/40'}>/</li>
                <li>
                  <Link href="/products" className={`${isLightTheme ? 'text-gray-500 hover:text-gray-700' : 'text-white/70 hover:text-white'} transition-colors`}>
                    מוצרים
                  </Link>
                </li>
                <li className={isLightTheme ? 'text-gray-400' : 'text-white/40'}>/</li>
                <li className="text-[#d97e00] font-semibold">{product.title}</li>
              </ol>
            </nav>

            {/* Title Row */}
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br from-[#d97e00] to-[#bf1a22] flex items-center justify-center shadow-xl">
                  <Image 
                    src={product.src} 
                    alt={product.alt} 
                  width={36} 
                  height={36} 
                  className="brightness-0 invert" 
                  />
                </div>
              <div>
                <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${isLightTheme ? 'text-[#1a1a1a]' : 'text-white'} mb-1`}>
                  {product.title}
                </h1>
                <p className={`text-base sm:text-lg ${isLightTheme ? 'text-gray-600' : 'text-white/80'}`}>
                  {product.subtitle}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className={`py-12 relative overflow-hidden ${!isDark ? 'bg-gradient-to-br from-[#f5f2f0] via-[#efe9e6] to-[#e8e2de]' : 'bg-gradient-to-br from-[#1a1a1a] via-[#151515] to-[#111111]'}`}>
          {/* Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Large top-right orange glow */}
            <div 
              className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(217,126,0,0.12) 0%, rgba(217,126,0,0.05) 40%, transparent 70%)' }}
            />
            {/* Large bottom-left red glow */}
            <div 
              className="absolute -bottom-20 -left-20 w-[600px] h-[600px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(191,26,34,0.14) 0%, rgba(191,26,34,0.06) 40%, transparent 70%)' }}
            />
            {/* Center red-orange blend glow */}
            <div 
              className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full rotate-12"
              style={{ background: 'radial-gradient(ellipse, rgba(191,26,34,0.05) 0%, rgba(217,126,0,0.04) 50%, transparent 70%)' }}
            />
            {/* Small orange accent - top */}
            <div 
              className="absolute top-20 right-1/4 w-[200px] h-[200px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(217,126,0,0.08) 0%, transparent 70%)' }}
            />
            {/* Red accent - center right */}
            <div 
              className="absolute top-1/2 -right-10 w-[350px] h-[350px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(191,26,34,0.10) 0%, transparent 70%)' }}
            />
            {/* Red accent - bottom center */}
            <div 
              className="absolute bottom-20 left-1/3 w-[300px] h-[300px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(191,26,34,0.08) 0%, transparent 70%)' }}
            />
            {/* Small red accent - top left */}
            <div 
              className="absolute top-40 left-20 w-[200px] h-[200px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(191,26,34,0.07) 0%, transparent 70%)' }}
            />
            {/* Top accent line - orange to red gradient */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#d97e00]/40 via-[#bf1a22]/25 to-[#bf1a22]/40" />
            {/* Diagonal decorative line - red */}
            <div 
              className="absolute bottom-0 left-0 w-[400px] h-[2px] origin-bottom-left -rotate-45 opacity-25"
              style={{ background: 'linear-gradient(to right, #bf1a22, transparent)' }}
            />
            {/* Bottom subtle gradient line */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#bf1a22]/30 via-[#bf1a22]/15 to-[#d97e00]/25" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-6">
            
            {(hasCategories || hasCategoryGroups) ? (
              <div className="flex flex-col lg:flex-row gap-10">
                
                {/* Sidebar */}
                <aside className="lg:w-72 flex-shrink-0">
                  <div className={`sticky top-24 rounded-2xl shadow-lg overflow-hidden ${!isDark ? 'bg-white border border-gray-100' : 'bg-[#252525] border border-white/10'}`}>
                    <div className={`px-5 py-4 border-b ${!isDark ? 'bg-gradient-to-r from-[#d97e00]/5 to-white border-gray-100' : 'bg-gradient-to-r from-[#d97e00]/10 to-[#252525] border-white/10'}`}>
                      <h3 className={`text-base font-bold ${!isDark ? 'text-[#1a1a1a]' : 'text-white'}`}>
                        קטגוריות מוצרים
                      </h3>
                    </div>
                    <nav className="max-h-[70vh] overflow-y-auto">
                      {/* Render category groups with titles */}
                      {hasCategoryGroups ? (
                        categoryGroups.map((group, groupIndex) => (
                          <div key={groupIndex}>
                            {/* Group Title - Non-clickable */}
                            <div className={`px-5 py-3 border-b ${!isDark ? 'bg-gradient-to-r from-[#d97e00]/10 to-[#d97e00]/5 border-gray-100' : 'bg-gradient-to-r from-[#d97e00]/20 to-[#d97e00]/10 border-white/10'}`}>
                              <h4 className="text-sm font-bold text-[#d97e00]">
                                {group.groupTitle}
                              </h4>
                            </div>
                            {/* Categories under this group */}
                            {group.categories.map((category, index) => {
                              const totalProducts = category.products.length;
                              
                              return (
                                <button
                                  key={index}
                                  onClick={() => toggleCategory(category.name)}
                                  className={`w-full text-right px-5 py-3 flex items-center justify-between transition-all border-b last:border-b-0 cursor-pointer ${
                                    !isDark ? 'border-gray-50' : 'border-white/5'
                                  } ${
                                    activeCategory === category.name
                                      ? !isDark ? 'bg-gradient-to-l from-[#d97e00]/10 to-white border-r-3 border-r-[#d97e00]' : 'bg-gradient-to-l from-[#d97e00]/20 to-[#252525] border-r-3 border-r-[#d97e00]'
                                      : !isDark ? 'hover:bg-gray-50' : 'hover:bg-white/5'
                                  }`}
                                >
                                  <span className={`text-[14px] font-medium ${
                                    activeCategory === category.name 
                                      ? 'text-[#d97e00]' 
                                      : !isDark ? 'text-[#333]' : 'text-white/80'
                                  }`}>
                                    {category.name}
                                  </span>
                                  {totalProducts > 0 && (
                                    <span className={`text-xs px-2 py-0.5 rounded-md font-semibold ${
                                      activeCategory === category.name 
                                        ? 'bg-[#d97e00] text-white' 
                                        : !isDark ? 'bg-gray-100 text-[#555]' : 'bg-white/10 text-white/60'
                                    }`}>
                                      {totalProducts}
                                    </span>
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        ))
                      ) : (
                        /* Regular categories without groups */
                        categories.map((category, index) => {
                          // Calculate total products including subcategories
                          const hasSubcategories = category.subcategories && category.subcategories.length > 0;
                          const totalProducts = hasSubcategories 
                            ? category.subcategories.reduce((sum, sub) => sum + sub.products.length, 0)
                            : category.products.length;
                          
                          return (
                            <button
                              key={index}
                              onClick={() => toggleCategory(category.name)}
                              className={`w-full text-right px-5 py-3.5 flex items-center justify-between transition-all border-b last:border-b-0 cursor-pointer ${
                                !isDark ? 'border-gray-50' : 'border-white/5'
                              } ${
                                activeCategory === category.name
                                  ? !isDark ? 'bg-gradient-to-l from-[#d97e00]/10 to-white border-r-3 border-r-[#d97e00]' : 'bg-gradient-to-l from-[#d97e00]/20 to-[#252525] border-r-3 border-r-[#d97e00]'
                                  : !isDark ? 'hover:bg-gray-50' : 'hover:bg-white/5'
                              }`}
                            >
                              <span className={`text-[15px] font-medium ${
                                activeCategory === category.name 
                                  ? 'text-[#d97e00]' 
                                  : !isDark ? 'text-[#333]' : 'text-white/80'
                              }`}>
                                {category.name}
                              </span>
                              <span className={`text-sm px-2 py-1 rounded-md font-semibold ${
                                activeCategory === category.name 
                                  ? 'bg-[#d97e00] text-white' 
                                  : !isDark ? 'bg-gray-100 text-[#555]' : 'bg-white/10 text-white/60'
                              }`}>
                                {totalProducts}
                              </span>
                            </button>
                          );
                        })
                      )}
                    </nav>
                  </div>
                </aside>

                {/* Main Content */}
                <div className="flex-1">
                  {activeCategory ? (
                    <div>
                      {/* Category Title */}
                      <div className={`mb-8 pb-4 border-b-2 ${!isDark ? 'border-gray-100' : 'border-white/10'}`}>
                        <h2 className={`text-2xl font-bold ${!isDark ? 'text-[#1a1a1a]' : 'text-white'}`}>
                          {activeCategory}
                        </h2>
                        {(() => {
                          const category = hasCategoryGroups 
                            ? allCategoriesFromGroups.find(c => c.name === activeCategory)
                            : categories.find(c => c.name === activeCategory);
                          const hasSubcategories = category?.subcategories && category.subcategories.length > 0;
                          const totalProducts = hasSubcategories 
                            ? category.subcategories.reduce((sum, sub) => sum + sub.products.length, 0)
                            : category?.products.length || 0;
                          return totalProducts > 0 ? (
                            <p className={`text-base mt-2 ${!isDark ? 'text-[#666]' : 'text-white/60'}`}>
                              {totalProducts} מוצרים בקטגוריה
                            </p>
                          ) : (
                            <p className={`text-base mt-2 ${!isDark ? 'text-[#666]' : 'text-white/60'}`}>
                              קטגוריה זו בבנייה - צרו קשר לפרטים
                            </p>
                          );
                        })()}
                      </div>

                      {/* Check if category has subcategories (like רמקולים פאסיביים בתיבה) */}
                      {(() => {
                        const category = hasCategoryGroups 
                          ? allCategoriesFromGroups.find(c => c.name === activeCategory)
                          : categories.find(c => c.name === activeCategory);
                        const hasSubcategories = category?.subcategories && category.subcategories.length > 0;
                        
                        if (hasSubcategories) {
                          return (
                            <div className="space-y-10">
                              {category.subcategories.map((subcategory, subIndex) => (
                                <div key={subIndex}>
                                  {/* Brand/Subcategory Header */}
                                  <div className="flex items-center gap-4 mb-5">
                                    <div className="h-[2px] flex-grow bg-gradient-to-l from-[#d97e00]/40 to-transparent" />
                                    <h3 className="text-lg font-bold text-[#d97e00] px-4 py-2 bg-[#d97e00]/10 rounded-lg whitespace-nowrap">
                                      {subcategory.brand}
                                    </h3>
                                    <div className="h-[2px] flex-grow bg-gradient-to-r from-[#d97e00]/40 to-transparent" />
          </div>

                                  {/* Products Grid for this brand */}
                                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                                    {subcategory.products.map((item, index) => (
                                      <div 
                                        key={index}
                                        onClick={() => copyToClipboard(item.name)}
                                        className={`rounded-xl p-4 hover:border-[#d97e00]/40 hover:shadow-lg transition-all group cursor-copy relative ${!isDark ? 'bg-white border border-gray-100' : 'bg-[#252525] border border-white/10'}`}
                                        title="לחץ להעתקה"
                                      >
                                        <h4 className={`text-[15px] font-semibold group-hover:text-[#d97e00] transition-colors leading-relaxed ${!isDark ? 'text-[#1a1a1a]' : 'text-white'}`}>
                                          {item.name}
                                        </h4>
                                        {copiedItem === item.name && (
                                          <div className="absolute top-1 left-1 bg-green-500 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1 animate-fade-in">
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            הועתק!
                                          </div>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          );
                        }
                        
                        // Regular products grid (no subcategories)
                        if (category?.products && category.products.length > 0) {
                          return (
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                              {category.products.map((item, index) => (
                                <div 
                                  key={index}
                                  onClick={() => copyToClipboard(item.name)}
                                  className={`rounded-xl p-5 hover:border-[#d97e00]/40 hover:shadow-lg transition-all group cursor-copy relative ${!isDark ? 'bg-white border border-gray-100' : 'bg-[#252525] border border-white/10'}`}
                                  title="לחץ להעתקה"
                                >
                                  <h4 className={`text-base font-bold group-hover:text-[#d97e00] transition-colors ${!isDark ? 'text-[#1a1a1a]' : 'text-white'}`}>
                                    {item.name}
                                  </h4>
                                  {item.type && (
                                    <span className={`text-sm mt-2 block ${!isDark ? 'text-[#666]' : 'text-white/60'}`}>
                                      {item.type}
                                    </span>
                                  )}
                                  {copiedItem === item.name && (
                                    <div className="absolute top-1 left-1 bg-green-500 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1 animate-fade-in">
                                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                      </svg>
                                      הועתק!
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          );
                        }
                        
                        // Empty category - show contact message
                        return (
                          <div className="text-center py-12 px-6">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#d97e00]/20 to-[#bf1a22]/10 flex items-center justify-center">
                              <svg className="w-8 h-8 text-[#d97e00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                            </div>
                            <p className={`text-lg mb-4 ${!isDark ? 'text-[#555]' : 'text-white/70'}`}>
                              לקבלת מידע על המוצרים בקטגוריה זו
                            </p>
                            <a 
                              href="/#contact" 
                              className="inline-block text-base font-bold px-6 py-2 rounded-xl bg-gradient-to-r from-[#d97e00] to-[#bf1a22] text-white hover:shadow-lg transition-all"
                            >
                              צרו קשר
                            </a>
                          </div>
                        );
                      })()}
                    </div>
                  ) : (
                    /* All Categories Grid View */
                    <div>
                      <div className={`mb-8 pb-4 border-b-2 ${!isDark ? 'border-gray-100' : 'border-white/10'}`}>
                        <h2 className={`text-2xl font-bold ${!isDark ? 'text-[#1a1a1a]' : 'text-white'}`}>
                          כל הקטגוריות
              </h2>
                        <p className={`text-base mt-2 ${!isDark ? 'text-[#666]' : 'text-white/60'}`}>
                          בחרו קטגוריה לצפייה במוצרים
              </p>
            </div>
                      {hasCategoryGroups ? (
                        /* Category Groups Grid */
                        <div className="space-y-8">
                          {categoryGroups.map((group, groupIndex) => (
                            <div key={groupIndex}>
                              <h3 className="text-lg font-bold text-[#d97e00] mb-4 pb-2 border-b border-[#d97e00]/20">
                                {group.groupTitle}
                              </h3>
                              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                                {group.categories.map((category, index) => (
                                  <button
                                    key={index}
                                    onClick={() => toggleCategory(category.name)}
                                    className={`p-4 rounded-xl text-right hover:border-[#d97e00]/40 hover:shadow-lg transition-all group cursor-pointer ${!isDark ? 'bg-white border border-gray-100' : 'bg-[#252525] border border-white/10'}`}
                                  >
                                    <p className={`text-[14px] font-semibold leading-relaxed group-hover:text-[#d97e00] transition-colors ${!isDark ? 'text-[#1a1a1a]' : 'text-white'}`}>
                                      {category.name}
                                    </p>
                                  </button>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        /* Regular Categories Grid */
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                          {categories.map((category, index) => {
                            const hasSubcategories = category.subcategories && category.subcategories.length > 0;
                            const totalProducts = hasSubcategories 
                              ? category.subcategories.reduce((sum, sub) => sum + sub.products.length, 0)
                              : category.products.length;
                            
                            return (
                              <button
                                key={index}
                                onClick={() => toggleCategory(category.name)}
                                className={`p-5 rounded-xl text-right hover:border-[#d97e00]/40 hover:shadow-lg transition-all group cursor-pointer ${!isDark ? 'bg-white border border-gray-100' : 'bg-[#252525] border border-white/10'}`}
                              >
                                <p className={`text-[15px] font-semibold leading-relaxed group-hover:text-[#d97e00] transition-colors ${!isDark ? 'text-[#1a1a1a]' : 'text-white'}`}>
                                  {category.name}
                                </p>
                                <span className={`text-sm mt-2 block ${!isDark ? 'text-[#666]' : 'text-white/60'}`}>
                                  {totalProducts} מוצרים
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ) : 'contentSections' in product && Array.isArray(product.contentSections) ? (
              /* Multiple content sections with images */
              <div className="space-y-8">
                {(product.contentSections as Array<{title?: string; subtitle?: string; text?: string; image?: string; images?: string[]; imagesTitles?: string[]; links?: Array<{text: string; type: string; url: string}>; isPromo?: boolean}>).map((section, sectionIndex) => (
                  <div key={sectionIndex} className={`rounded-2xl overflow-hidden shadow-sm ${section.isPromo ? 'border-2 border-[#d97e00]' : ''} ${!isDark ? 'bg-white border border-gray-100' : 'bg-[#252525] border border-white/10'}`}>
                    {section.isPromo && (
                      <div className="bg-gradient-to-r from-[#d97e00] to-[#bf1a22] text-white text-center py-2 font-bold">
                        🎁 מבצע מיוחד
                      </div>
                    )}
                    {section.image && (
                      <div className={`relative w-full flex flex-col items-center p-8 ${!isDark ? 'bg-gradient-to-br from-gray-50 to-gray-100' : 'bg-gradient-to-br from-[#1a1a1a] to-[#252525]'}`}>
                        <div className="relative max-w-md w-full">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#d97e00]/20 to-[#bf1a22]/20 rounded-2xl blur-2xl transform scale-95" />
                          <Image
                            src={section.image}
                            alt={section.title || product.title}
                            width={500}
                            height={350}
                            className="relative rounded-xl shadow-2xl w-full h-auto object-contain"
                          />
                        </div>
                      </div>
                    )}
                    {section.images && section.images.length > 0 && (
                      <div className={`relative w-full p-8 ${!isDark ? 'bg-gradient-to-br from-gray-50 to-gray-100' : 'bg-gradient-to-br from-[#1a1a1a] to-[#252525]'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                          {section.images.map((img, imgIndex) => (
                            <div key={imgIndex} className="relative flex flex-col items-center">
                              <div className="relative w-full">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#d97e00]/10 to-[#bf1a22]/10 rounded-xl blur-xl transform scale-95" />
                                <Image
                                  src={img}
                                  alt={section.imagesTitles?.[imgIndex] || `${section.title || product.title} ${imgIndex + 1}`}
                                  width={300}
                                  height={250}
                                  className="relative rounded-xl shadow-lg w-full h-auto object-contain bg-white"
                                />
                              </div>
                              {section.imagesTitles?.[imgIndex] && (
                                <p className={`mt-3 text-lg font-bold text-center ${!isDark ? 'text-[#1a1a1a]' : 'text-white'}`}>
                                  {section.imagesTitles[imgIndex]}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {(section.title || section.subtitle || section.text || section.links) && (
                    <div className="p-8">
                      {section.title && (
                        <h3 className={`text-2xl font-bold mb-2 ${section.isPromo ? 'text-[#bf1a22]' : ''} ${!isDark ? 'text-[#1a1a1a]' : 'text-white'}`}>
                          {section.title}
                        </h3>
                      )}
                      {section.subtitle && (
                        <p className={`font-semibold mb-4 ${section.isPromo ? 'text-4xl text-[#d97e00]' : 'text-[#d97e00]'}`}>{section.subtitle}</p>
                      )}
                      {section.text && (
                        <div className="prose prose-lg max-w-none text-right">
                          {section.text.split('\n\n').map((paragraph, index) => (
                            <p key={index} className={`text-lg leading-relaxed mb-4 last:mb-0 whitespace-pre-line ${!isDark ? 'text-[#333]' : 'text-white/80'}`}>
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      )}
                      {section.links && section.links.length > 0 && (
                        <div className="mt-6 flex flex-wrap gap-4">
                          {section.links.map((link, linkIndex) => (
                            <a
                              key={linkIndex}
                              href={link.url}
                              target={link.type === 'external' ? '_blank' : '_self'}
                              rel={link.type === 'external' ? 'noopener noreferrer' : undefined}
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#d97e00] to-[#bf1a22] text-white font-semibold hover:shadow-lg transition-all cursor-pointer"
                            >
                              {link.type === 'image' && (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                              )}
                              {link.type === 'external' && (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                              )}
                              {link.text}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                    )}
                  </div>
                ))}
              </div>
            ) : 'contentText' in product && product.contentText ? (
              /* Descriptive text content with optional image */
              <div className={`rounded-2xl overflow-hidden shadow-sm ${!isDark ? 'bg-white border border-gray-100' : 'bg-[#252525] border border-white/10'}`}>
                {'contentImage' in product && product.contentImage && (
                  <div className={`relative w-full flex flex-col items-center p-8 ${!isDark ? 'bg-gradient-to-br from-gray-50 to-gray-100' : 'bg-gradient-to-br from-[#1a1a1a] to-[#252525]'}`}>
                    <div className="relative max-w-md w-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#d97e00]/20 to-[#bf1a22]/20 rounded-2xl blur-2xl transform scale-95" />
                      <Image
                        src={product.contentImage as string}
                        alt={product.title}
                        width={500}
                        height={350}
                        className="relative rounded-xl shadow-2xl w-full h-auto object-contain"
                      />
                    </div>
                    {'contentImageTitle' in product && product.contentImageTitle && (
                      <h3 className={`mt-6 text-xl font-bold ${!isDark ? 'text-[#1a1a1a]' : 'text-white'}`}>
                        {product.contentImageTitle as string}
                      </h3>
                    )}
                  </div>
                )}
                <div className="p-8">
                  <div className="prose prose-lg max-w-none text-right">
                    {(product.contentText as string).split('\n\n').map((paragraph, index) => (
                      <p key={index} className={`text-lg leading-relaxed mb-4 last:mb-0 ${!isDark ? 'text-[#333]' : 'text-white/80'}`}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* Simple Grid for non-category products */
              <div>
                <div className={`mb-8 pb-4 border-b-2 ${!isDark ? 'border-gray-100' : 'border-white/10'}`}>
                  <h2 className={`text-2xl font-bold ${!isDark ? 'text-[#1a1a1a]' : 'text-white'}`}>
                    המוצרים שלנו
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {product.variants.map((variant, index) => (
                <div 
                  key={index}
                      className={`rounded-xl p-5 hover:border-[#d97e00]/40 hover:shadow-lg transition-all group ${!isDark ? 'bg-white border border-gray-100' : 'bg-[#252525] border border-white/10'}`}
                    >
                      <div className="flex items-start gap-4">
                        <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#d97e00] to-[#bf1a22] flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
                    {index + 1}
                        </span>
                        <div>
                          <h3 className={`text-base font-bold group-hover:text-[#d97e00] transition-colors ${!isDark ? 'text-[#1a1a1a]' : 'text-white'}`}>
                    {variant.name}
                  </h3>
                          <p className={`text-sm mt-1 ${!isDark ? 'text-[#666]' : 'text-white/60'}`}>
                    {variant.description}
                  </p>
                        </div>
                  </div>
                </div>
              ))}
            </div>
              </div>
            )}

            {/* CTA */}
            <div className={`mt-14 py-10 px-8 rounded-2xl text-center shadow-sm ${!isDark ? 'bg-gradient-to-br from-white to-[#fafafa] border border-gray-100' : 'bg-[#252525] border border-white/10'}`}>
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-gradient-to-br from-[#d97e00]/20 to-[#bf1a22]/10 flex items-center justify-center">
                <svg className="w-7 h-7 text-[#d97e00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className={`text-xl font-bold mb-2 ${!isDark ? 'text-[#1a1a1a]' : 'text-white'}`}>
                מעוניינים במוצר?
                </h3>
              <p className={`text-base mb-6 ${!isDark ? 'text-[#555]' : 'text-white/70'}`}>
                צרו קשר לקבלת הצעת מחיר מותאמת אישית
              </p>
              <div className="flex gap-4 justify-center">
                <button 
                  onClick={navigateToContact}
                  className="text-base font-bold px-8 py-3 rounded-xl bg-gradient-to-r from-[#d97e00] to-[#bf1a22] text-white hover:shadow-lg transition-all cursor-pointer"
                  >
                    צרו קשר
                </button>
                  <Link 
                    href="/products" 
                  className={`text-base font-bold px-8 py-3 rounded-xl transition-colors ${!isDark ? 'bg-gray-100 text-[#333] hover:bg-gray-200' : 'bg-white/10 text-white hover:bg-white/20'}`}
                >
                  כל המוצרים
                  </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ThemeToggle />
      <AccessibilityButton />
      <WhatsAppButton />
    </div>
  );
}
