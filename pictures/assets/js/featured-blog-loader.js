// Featured Blog Loader for Homepage
// This script loads the featured blog post from Sanity CMS and displays it on the homepage

async function loadFeaturedBlog() {
  const featuredSection = document.getElementById('featured-blog-section');
  
  if (!featuredSection) {
    console.log('Featured blog section not found on this page');
    return;
  }
  
  try {
    // Check if Sanity client is available
    if (!window.SanityClient) {
      console.warn('Sanity client not loaded, using static featured blog');
      return;
    }
    
    // Fetch featured blog post
    const featuredPost = await window.SanityClient.getFeaturedBlogPost();
    
    if (!featuredPost) {
      console.log('No featured blog post found, using static content');
      return;
    }
    
    // Get image URL
    const imageUrl = window.SanityClient.getImageUrl(featuredPost.mainImage, 800);
    
    // Format date
    const publishedDate = new Date(featuredPost.publishedAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    // Update the featured blog section
    const featuredCard = featuredSection.querySelector('.featured-blog-card');
    
    if (featuredCard) {
      featuredCard.innerHTML = `
        <div class="featured-blog-image" style="background: url('${imageUrl}') center/cover; min-height: 400px; position: relative;">
          <div style="position: absolute; top: 20px; left: 20px; background: rgba(11, 90, 61, 0.95); color: white; padding: 10px 18px; border-radius: 25px; font-weight: 600; backdrop-filter: blur(10px);">
            <i class="fas fa-star"></i> Featured Post
          </div>
        </div>
        <div class="featured-blog-content" style="padding: 50px 45px;">
          <h3 style="font-size: 1.8rem; color: #0b5a3d; margin-bottom: 15px; line-height: 1.3;">
            ${featuredPost.title}
          </h3>
          <p style="color: #666; font-size: 0.95rem; margin-bottom: 10px;">
            <i class="fas fa-calendar" style="color: #0b5a3d;"></i> 
            <strong>${publishedDate}</strong>
            ${featuredPost.author ? ` • by ${featuredPost.author}` : ''}
          </p>
          <p style="color: #555; line-height: 1.7; margin-bottom: 25px; font-size: 1.05rem;">
            ${featuredPost.excerpt}
          </p>
          <div style="display: flex; gap: 15px; flex-wrap: wrap;">
            <a href="blog-post.html?slug=${featuredPost.slug.current}" class="btn" style="background: #0b5a3d; color: white; padding: 14px 28px; border-radius: 10px; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 10px; transition: all 0.3s ease;">
              <span>Read Full Story</span>
              <i class="fas fa-arrow-right"></i>
            </a>
            <a href="donate.html" class="btn" style="background: white; color: #0b5a3d; padding: 14px 28px; border-radius: 10px; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 10px; border: 2px solid #0b5a3d; transition: all 0.3s ease;">
              <i class="fas fa-heart"></i>
              <span>Support This Project</span>
            </a>
          </div>
        </div>
      `;
    }
    
    console.log('Featured blog loaded successfully from Sanity CMS');
    
  } catch (error) {
    console.error('Error loading featured blog:', error);
    console.log('Falling back to static featured blog content');
  }
}

// Load featured blog when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadFeaturedBlog);
} else {
  loadFeaturedBlog();
}
