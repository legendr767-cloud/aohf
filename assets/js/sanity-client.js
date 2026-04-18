// Sanity.io Client Configuration
// This file handles fetching blog posts from Sanity CMS

const SANITY_CONFIG = {
  projectId: 'YOUR_PROJECT_ID', // Replace with your Sanity project ID
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true // Use CDN for faster response
};

// Construct Sanity API URL
const SANITY_API_URL = `https://${SANITY_CONFIG.projectId}.api.sanity.io/v${SANITY_CONFIG.apiVersion}/data/query/${SANITY_CONFIG.dataset}`;

/**
 * Fetch data from Sanity using GROQ query
 * @param {string} query - GROQ query string
 * @returns {Promise<any>} - Query results
 */
async function fetchFromSanity(query) {
  try {
    const url = `${SANITY_API_URL}?query=${encodeURIComponent(query)}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Sanity API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error('Error fetching from Sanity:', error);
    return null;
  }
}

/**
 * Get image URL from Sanity image reference
 * @param {object} imageRef - Sanity image reference
 * @param {number} width - Desired width
 * @returns {string} - Image URL
 */
function getImageUrl(imageRef, width = 800) {
  if (!imageRef || !imageRef.asset) return '';
  
  const ref = imageRef.asset._ref;
  const [, id, dimensions, format] = ref.split('-');
  
  return `https://cdn.sanity.io/images/${SANITY_CONFIG.projectId}/${SANITY_CONFIG.dataset}/${id}-${dimensions}.${format}?w=${width}&auto=format`;
}

/**
 * Fetch all published blog posts
 * @returns {Promise<Array>} - Array of blog posts
 */
async function getAllBlogPosts() {
  const query = `*[_type == "blogPost" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    featured,
    featuredPriority,
    "author": author->name,
    "categories": categories[]->title
  }`;
  
  return await fetchFromSanity(query);
}

/**
 * Fetch featured blog post (highest priority)
 * @returns {Promise<object>} - Featured blog post
 */
async function getFeaturedBlogPost() {
  const query = `*[_type == "blogPost" && featured == true && !(_id in path("drafts.**"))] | order(featuredPriority desc, publishedAt desc) [0] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    "author": author->name,
    "categories": categories[]->title
  }`;
  
  return await fetchFromSanity(query);
}

/**
 * Fetch single blog post by slug
 * @param {string} slug - Blog post slug
 * @returns {Promise<object>} - Blog post
 */
async function getBlogPostBySlug(slug) {
  const query = `*[_type == "blogPost" && slug.current == "${slug}" && !(_id in path("drafts.**"))] [0] {
    _id,
    title,
    slug,
    excerpt,
    body,
    mainImage,
    publishedAt,
    "author": author->{name, image, bio},
    "categories": categories[]->title
  }`;
  
  return await fetchFromSanity(query);
}

/**
 * Convert Sanity block content to HTML
 * @param {Array} blocks - Sanity block content
 * @returns {string} - HTML string
 */
function blocksToHtml(blocks) {
  if (!blocks) return '';
  
  return blocks.map(block => {
    if (block._type === 'block') {
      const children = block.children.map(child => {
        let text = child.text;
        
        if (child.marks && child.marks.length > 0) {
          child.marks.forEach(mark => {
            if (mark === 'strong') text = `<strong>${text}</strong>`;
            if (mark === 'em') text = `<em>${text}</em>`;
            if (mark === 'code') text = `<code>${text}</code>`;
          });
        }
        
        return text;
      }).join('');
      
      const style = block.style || 'normal';
      
      if (style === 'h1') return `<h1>${children}</h1>`;
      if (style === 'h2') return `<h2>${children}</h2>`;
      if (style === 'h3') return `<h3>${children}</h3>`;
      if (style === 'h4') return `<h4>${children}</h4>`;
      if (style === 'blockquote') return `<blockquote>${children}</blockquote>`;
      
      return `<p>${children}</p>`;
    }
    
    if (block._type === 'image') {
      const imageUrl = getImageUrl(block, 1200);
      const alt = block.alt || '';
      return `<img src="${imageUrl}" alt="${alt}" style="max-width: 100%; height: auto; border-radius: 10px; margin: 20px 0;" />`;
    }
    
    return '';
  }).join('\n');
}

// Export functions for use in other scripts
window.SanityClient = {
  getAllBlogPosts,
  getFeaturedBlogPost,
  getBlogPostBySlug,
  getImageUrl,
  blocksToHtml
};
