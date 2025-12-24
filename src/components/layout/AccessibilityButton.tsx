"use client";

import { useState, useEffect, useCallback } from 'react';

interface AccessibilitySettings {
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  contrast: 'normal' | 'high' | 'inverted';
  saturation: 'normal' | 'low' | 'high' | 'grayscale';
  highlightLinks: boolean;
  highlightHeadings: boolean;
  readableFont: boolean;
  textAlign: 'default' | 'left' | 'right' | 'center';
  pauseAnimations: boolean;
  bigCursor: boolean;
  readingGuide: boolean;
  focusHighlight: boolean;
  hideImages: boolean;
}

const defaultSettings: AccessibilitySettings = {
  fontSize: 100,
  lineHeight: 100,
  letterSpacing: 0,
  contrast: 'normal',
  saturation: 'normal',
  highlightLinks: false,
  highlightHeadings: false,
  readableFont: false,
  textAlign: 'default',
  pauseAnimations: false,
  bigCursor: false,
  readingGuide: false,
  focusHighlight: false,
  hideImages: false,
};

export function AccessibilityButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);
  const [activeTab, setActiveTab] = useState<'content' | 'color' | 'navigation'>('content');

  // Load settings from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setSettings({ ...defaultSettings, ...parsed });
        applySettings({ ...defaultSettings, ...parsed });
      } catch (e) {
        console.error('Failed to parse accessibility settings');
      }
    }
  }, []);

  // Reading guide mouse follower
  useEffect(() => {
    if (!settings.readingGuide) return;
    
    const guide = document.getElementById('reading-guide');
    if (!guide) return;

    const handleMouseMove = (e: MouseEvent) => {
      guide.style.top = `${e.clientY - 15}px`;
      guide.style.display = 'block';
    };

    const handleMouseLeave = () => {
      guide.style.display = 'none';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [settings.readingGuide]);

  // Apply settings to the document
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const html = document.documentElement;
    const body = document.body;
    
    // Font size
    html.style.fontSize = `${newSettings.fontSize}%`;
    
    // Line height
    body.style.setProperty('--a11y-line-height', `${newSettings.lineHeight / 100 * 1.6}`);
    if (newSettings.lineHeight !== 100) {
      html.classList.add('a11y-line-height');
    } else {
      html.classList.remove('a11y-line-height');
    }
    
    // Letter spacing
    body.style.setProperty('--a11y-letter-spacing', `${newSettings.letterSpacing}px`);
    if (newSettings.letterSpacing !== 0) {
      html.classList.add('a11y-letter-spacing');
    } else {
      html.classList.remove('a11y-letter-spacing');
    }
    
    // Contrast
    html.classList.remove('a11y-high-contrast', 'a11y-inverted');
    if (newSettings.contrast === 'high') {
      html.classList.add('a11y-high-contrast');
    } else if (newSettings.contrast === 'inverted') {
      html.classList.add('a11y-inverted');
    }
    
    // Saturation
    html.classList.remove('a11y-low-saturation', 'a11y-high-saturation', 'a11y-grayscale');
    if (newSettings.saturation === 'low') {
      html.classList.add('a11y-low-saturation');
    } else if (newSettings.saturation === 'high') {
      html.classList.add('a11y-high-saturation');
    } else if (newSettings.saturation === 'grayscale') {
      html.classList.add('a11y-grayscale');
    }
    
    // Highlight links
    if (newSettings.highlightLinks) {
      html.classList.add('a11y-highlight-links');
    } else {
      html.classList.remove('a11y-highlight-links');
    }
    
    // Highlight headings
    if (newSettings.highlightHeadings) {
      html.classList.add('a11y-highlight-headings');
    } else {
      html.classList.remove('a11y-highlight-headings');
    }
    
    // Readable font
    if (newSettings.readableFont) {
      html.classList.add('a11y-readable-font');
    } else {
      html.classList.remove('a11y-readable-font');
    }
    
    // Text align
    html.classList.remove('a11y-text-left', 'a11y-text-right', 'a11y-text-center');
    if (newSettings.textAlign !== 'default') {
      html.classList.add(`a11y-text-${newSettings.textAlign}`);
    }
    
    // Pause animations
    if (newSettings.pauseAnimations) {
      html.classList.add('a11y-pause-animations');
    } else {
      html.classList.remove('a11y-pause-animations');
    }
    
    // Big cursor
    if (newSettings.bigCursor) {
      html.classList.add('a11y-big-cursor');
    } else {
      html.classList.remove('a11y-big-cursor');
    }
    
    // Reading guide
    if (newSettings.readingGuide) {
      html.classList.add('a11y-reading-guide');
    } else {
      html.classList.remove('a11y-reading-guide');
    }
    
    // Focus highlight
    if (newSettings.focusHighlight) {
      html.classList.add('a11y-focus-highlight');
    } else {
      html.classList.remove('a11y-focus-highlight');
    }
    
    // Hide images
    if (newSettings.hideImages) {
      html.classList.add('a11y-hide-images');
    } else {
      html.classList.remove('a11y-hide-images');
    }
  }, []);

  const updateSetting = <K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K]
  ) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
    applySettings(defaultSettings);
    localStorage.removeItem('accessibility-settings');
  };

  const hasActiveSettings = () => {
    return JSON.stringify(settings) !== JSON.stringify(defaultSettings);
  };

  // Accessibility statement
  const openAccessibilityStatement = () => {
    const statement = `
      הצהרת נגישות - בת-קול בע"מ
      
      אתר זה מונגש בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות.
      אנו עושים את מירב המאמצים להנגיש את האתר לכלל הציבור.
      
      אמצעי הנגישות באתר:
      • התאמת גודל טקסט
      • שינוי ניגודיות
      • הדגשת קישורים וכותרות
      • מצב קריאה עם גופן נגיש
      • עצירת אנימציות
      • סמן מוגדל
      • קו קריאה
      • ניווט מקלדת מלא
      
      נתקלתם בבעיית נגישות? צרו קשר:
      טלפון: 08-6276698
      דוא"ל: bk@batkol.co.il
      
      תאריך עדכון: ${new Date().toLocaleDateString('he-IL')}
    `;
    alert(statement);
  };

  return (
    <>
      {/* Reading Guide Element */}
      <div
        id="reading-guide"
        className="fixed left-0 right-0 h-8 pointer-events-none z-[9999] hidden"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(255, 255, 0, 0.3) 40%, rgba(255, 255, 0, 0.3) 60%, transparent 100%)',
          borderTop: '1px solid rgba(255, 200, 0, 0.5)',
          borderBottom: '1px solid rgba(255, 200, 0, 0.5)',
        }}
        aria-hidden="true"
      />

      {/* Accessibility Menu */}
      {isOpen && (
        <div 
          className="fixed bottom-[120px] left-4 w-[300px] md:bottom-36 md:left-6 md:w-[340px] bg-white rounded-2xl shadow-2xl border border-neutral-200 z-50 overflow-hidden max-h-[70vh] flex flex-col"
          role="dialog"
          aria-label="תפריט נגישות"
          aria-modal="true"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0066cc] to-[#004499] px-5 py-4 flex-shrink-0">
            <div className="flex items-center justify-between">
              <h2 className="text-white font-bold text-lg flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9H15V22H13V16H11V22H9V9H3V7H21V9Z"/>
                </svg>
                תפריט נגישות
              </h2>
              {hasActiveSettings() && (
                <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">
                  פעיל
                </span>
              )}
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-neutral-200 flex-shrink-0">
            <button
              onClick={() => setActiveTab('content')}
              className={`flex-1 py-3 text-sm font-medium transition-colors ${
                activeTab === 'content'
                  ? 'text-[#0066cc] border-b-2 border-[#0066cc] bg-blue-50/50'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
              }`}
            >
              תוכן
            </button>
            <button
              onClick={() => setActiveTab('color')}
              className={`flex-1 py-3 text-sm font-medium transition-colors ${
                activeTab === 'color'
                  ? 'text-[#0066cc] border-b-2 border-[#0066cc] bg-blue-50/50'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
              }`}
            >
              צבעים
            </button>
            <button
              onClick={() => setActiveTab('navigation')}
              className={`flex-1 py-3 text-sm font-medium transition-colors ${
                activeTab === 'navigation'
                  ? 'text-[#0066cc] border-b-2 border-[#0066cc] bg-blue-50/50'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
              }`}
            >
              ניווט
            </button>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4 overflow-y-auto flex-1">
            {activeTab === 'content' && (
              <>
                {/* Font Size */}
                <div className="bg-neutral-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-neutral-700 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"/>
                      </svg>
                      גודל טקסט
                    </span>
                    <span className="text-xs text-neutral-500 bg-white px-2 py-1 rounded">{settings.fontSize}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => settings.fontSize > 70 && updateSetting('fontSize', settings.fontSize - 10)}
                      className="w-10 h-10 rounded-lg bg-white border border-neutral-200 hover:border-[#0066cc] hover:bg-blue-50 flex items-center justify-center text-neutral-700 font-bold transition-all"
                      aria-label="הקטן טקסט"
                    >
                      א-
                    </button>
                    <input
                      type="range"
                      min="70"
                      max="200"
                      step="10"
                      value={settings.fontSize}
                      onChange={(e) => updateSetting('fontSize', Number(e.target.value))}
                      className="flex-1 h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#0066cc]"
                      aria-label="גודל טקסט"
                    />
                    <button
                      onClick={() => settings.fontSize < 200 && updateSetting('fontSize', settings.fontSize + 10)}
                      className="w-10 h-10 rounded-lg bg-white border border-neutral-200 hover:border-[#0066cc] hover:bg-blue-50 flex items-center justify-center text-neutral-700 font-bold transition-all"
                      aria-label="הגדל טקסט"
                    >
                      א+
                    </button>
                  </div>
                </div>

                {/* Line Height */}
                <div className="bg-neutral-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-neutral-700 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
                      </svg>
                      גובה שורה
                    </span>
                    <span className="text-xs text-neutral-500 bg-white px-2 py-1 rounded">{settings.lineHeight}%</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="200"
                    step="10"
                    value={settings.lineHeight}
                    onChange={(e) => updateSetting('lineHeight', Number(e.target.value))}
                    className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#0066cc]"
                    aria-label="גובה שורה"
                  />
                </div>

                {/* Letter Spacing */}
                <div className="bg-neutral-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-neutral-700 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8M8 12h8m-8 5h8"/>
                      </svg>
                      מרווח אותיות
                    </span>
                    <span className="text-xs text-neutral-500 bg-white px-2 py-1 rounded">{settings.letterSpacing}px</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    step="1"
                    value={settings.letterSpacing}
                    onChange={(e) => updateSetting('letterSpacing', Number(e.target.value))}
                    className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#0066cc]"
                    aria-label="מרווח אותיות"
                  />
                </div>

                {/* Text Alignment */}
                <div className="bg-neutral-50 rounded-xl p-4">
                  <span className="text-sm font-medium text-neutral-700 mb-3 block">יישור טקסט</span>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { value: 'default', icon: '⊘', label: 'ברירת מחדל' },
                      { value: 'right', icon: '⫸', label: 'ימין' },
                      { value: 'center', icon: '☰', label: 'מרכז' },
                      { value: 'left', icon: '⫷', label: 'שמאל' },
                    ].map((align) => (
                      <button
                        key={align.value}
                        onClick={() => updateSetting('textAlign', align.value as AccessibilitySettings['textAlign'])}
                        className={`p-2 rounded-lg border transition-all text-center ${
                          settings.textAlign === align.value
                            ? 'bg-[#0066cc] text-white border-[#0066cc]'
                            : 'bg-white border-neutral-200 hover:border-[#0066cc] text-neutral-600'
                        }`}
                        aria-label={align.label}
                        aria-pressed={settings.textAlign === align.value}
                      >
                        <span className="text-lg">{align.icon}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Readable Font Toggle */}
                <ToggleOption
                  label="גופן קריא (דיסלקציה)"
                  description="גופן ברור וקל לקריאה"
                  icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>}
                  checked={settings.readableFont}
                  onChange={() => updateSetting('readableFont', !settings.readableFont)}
                />
              </>
            )}

            {activeTab === 'color' && (
              <>
                {/* Contrast */}
                <div className="bg-neutral-50 rounded-xl p-4">
                  <span className="text-sm font-medium text-neutral-700 mb-3 block flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                    </svg>
                    ניגודיות
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { value: 'normal', label: 'רגיל', bg: 'bg-white' },
                      { value: 'high', label: 'גבוה', bg: 'bg-black text-white' },
                      { value: 'inverted', label: 'הפוך', bg: 'bg-yellow-400 text-black' },
                    ].map((contrast) => (
                      <button
                        key={contrast.value}
                        onClick={() => updateSetting('contrast', contrast.value as AccessibilitySettings['contrast'])}
                        className={`p-3 rounded-lg border transition-all text-center text-sm font-medium ${
                          settings.contrast === contrast.value
                            ? 'ring-2 ring-[#0066cc] ring-offset-2'
                            : 'hover:ring-1 hover:ring-neutral-300'
                        } ${contrast.bg} border-neutral-300`}
                        aria-pressed={settings.contrast === contrast.value}
                      >
                        {contrast.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Saturation */}
                <div className="bg-neutral-50 rounded-xl p-4">
                  <span className="text-sm font-medium text-neutral-700 mb-3 block flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
                    </svg>
                    רוויית צבע
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { value: 'normal', label: 'רגיל' },
                      { value: 'low', label: 'נמוך' },
                      { value: 'high', label: 'גבוה' },
                      { value: 'grayscale', label: 'שחור-לבן' },
                    ].map((sat) => (
                      <button
                        key={sat.value}
                        onClick={() => updateSetting('saturation', sat.value as AccessibilitySettings['saturation'])}
                        className={`p-2.5 rounded-lg border transition-all text-center text-sm ${
                          settings.saturation === sat.value
                            ? 'bg-[#0066cc] text-white border-[#0066cc]'
                            : 'bg-white border-neutral-200 hover:border-[#0066cc] text-neutral-600'
                        }`}
                        aria-pressed={settings.saturation === sat.value}
                      >
                        {sat.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Highlight Links */}
                <ToggleOption
                  label="הדגשת קישורים"
                  description="מסמן את כל הקישורים בצבע בולט"
                  icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>}
                  checked={settings.highlightLinks}
                  onChange={() => updateSetting('highlightLinks', !settings.highlightLinks)}
                />

                {/* Highlight Headings */}
                <ToggleOption
                  label="הדגשת כותרות"
                  description="מסמן את כל הכותרות בצבע בולט"
                  icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16"/></svg>}
                  checked={settings.highlightHeadings}
                  onChange={() => updateSetting('highlightHeadings', !settings.highlightHeadings)}
                />

                {/* Hide Images */}
                <ToggleOption
                  label="הסתר תמונות"
                  description="מציג טקסט חלופי במקום תמונות"
                  icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>}
                  checked={settings.hideImages}
                  onChange={() => updateSetting('hideImages', !settings.hideImages)}
                />
              </>
            )}

            {activeTab === 'navigation' && (
              <>
                {/* Big Cursor */}
                <ToggleOption
                  label="סמן מוגדל"
                  description="סמן עכבר גדול ובולט יותר"
                  icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"/></svg>}
                  checked={settings.bigCursor}
                  onChange={() => updateSetting('bigCursor', !settings.bigCursor)}
                />

                {/* Reading Guide */}
                <ToggleOption
                  label="קו קריאה"
                  description="קו עוקב שעוזר במעקב אחר שורות"
                  icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16"/></svg>}
                  checked={settings.readingGuide}
                  onChange={() => updateSetting('readingGuide', !settings.readingGuide)}
                />

                {/* Focus Highlight */}
                <ToggleOption
                  label="הדגשת מיקוד"
                  description="מסגרת בולטת סביב אלמנט ממוקד"
                  icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>}
                  checked={settings.focusHighlight}
                  onChange={() => updateSetting('focusHighlight', !settings.focusHighlight)}
                />

                {/* Pause Animations */}
                <ToggleOption
                  label="עצירת אנימציות"
                  description="מפסיק את כל האנימציות והתנועות"
                  icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>}
                  checked={settings.pauseAnimations}
                  onChange={() => updateSetting('pauseAnimations', !settings.pauseAnimations)}
                />

                {/* Keyboard Shortcuts Info */}
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                  <span className="text-sm font-medium text-blue-800 mb-2 block flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    קיצורי מקלדת
                  </span>
                  <ul className="text-xs text-blue-700 space-y-1">
                    <li><kbd className="bg-blue-100 px-1.5 py-0.5 rounded">Tab</kbd> - מעבר בין אלמנטים</li>
                    <li><kbd className="bg-blue-100 px-1.5 py-0.5 rounded">Enter</kbd> - הפעלת לחצן/קישור</li>
                    <li><kbd className="bg-blue-100 px-1.5 py-0.5 rounded">Esc</kbd> - סגירת תפריט</li>
                  </ul>
                </div>
              </>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-neutral-200 bg-neutral-50 flex-shrink-0">
            <div className="flex gap-2">
              <button
                onClick={resetSettings}
                className="flex-1 py-2.5 rounded-lg bg-white border border-neutral-200 hover:bg-neutral-100 text-neutral-700 text-sm font-medium transition-colors flex items-center justify-center gap-2"
                aria-label="איפוס כל ההגדרות"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                </svg>
                איפוס
              </button>
              <button
                onClick={openAccessibilityStatement}
                className="flex-1 py-2.5 rounded-lg bg-[#0066cc] hover:bg-[#0055aa] text-white text-sm font-medium transition-colors flex items-center justify-center gap-2"
                aria-label="הצהרת נגישות"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                הצהרת נגישות
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-[72px] left-4 w-10 h-10 md:bottom-24 md:left-6 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all cursor-pointer z-50 group ${
          isOpen 
            ? 'bg-neutral-800 hover:bg-neutral-700' 
            : hasActiveSettings()
              ? 'bg-[#0066cc] hover:bg-[#0055aa] ring-4 ring-[#0066cc]/30'
              : 'bg-[#0066cc] hover:bg-[#0055aa]'
        }`}
        aria-label={isOpen ? 'סגור תפריט נגישות' : 'פתח תפריט נגישות'}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
        {isOpen ? (
          <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        ) : (
          <svg className="w-5 h-5 md:w-7 md:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9H15V22H13V16H11V22H9V9H3V7H21V9Z"/>
          </svg>
        )}
        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-neutral-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          נגישות
        </span>
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/20" 
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}

// Toggle Option Component
interface ToggleOptionProps {
  label: string;
  description: string;
  icon: React.ReactNode;
  checked: boolean;
  onChange: () => void;
}

function ToggleOption({ label, description, icon, checked, onChange }: ToggleOptionProps) {
  return (
    <button
      onClick={onChange}
      className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all text-right ${
        checked
          ? 'bg-blue-50 border-[#0066cc]'
          : 'bg-neutral-50 border-transparent hover:border-neutral-200'
      }`}
      role="switch"
      aria-checked={checked}
    >
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
        checked ? 'bg-[#0066cc] text-white' : 'bg-white text-neutral-500 border border-neutral-200'
      }`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className={`text-sm font-medium ${checked ? 'text-[#0066cc]' : 'text-neutral-700'}`}>
          {label}
        </div>
        <div className="text-xs text-neutral-500 truncate">{description}</div>
      </div>
      <div className={`w-11 h-6 rounded-full transition-colors relative flex-shrink-0 ${
        checked ? 'bg-[#0066cc]' : 'bg-neutral-300'
      }`}>
        <span className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all ${
          checked ? 'right-1' : 'right-6'
        }`}/>
      </div>
    </button>
  );
}
