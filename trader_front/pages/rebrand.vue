<template>
  <div class="blog-container">
    <div class="blog-content">
      <header class="blog-header">
        <h1 class="blog-title">
          A New Era for BVX: Embracing Innovation Through Strategic Rebranding
        </h1>
        <div class="blog-meta">
          <span class="author">By BVX Leadership Team</span>
          <span class="date">Published on November 1, 2025</span>
          <span class="reading-time">5 min read</span>
        </div>
      </header>

      <div class="blog-body">
        <p class="blog-intro">
          Today marks a pivotal moment in our journey as we proudly unveil BVX's
          comprehensive rebranding initiative. This transformation represents our
          commitment to innovation, enhanced user experience, and a forward-looking vision
          that will redefine trading excellence.
        </p>

        <h2>A Fresh Identity for a New Chapter</h2>
        <p>
          Our rebranding goes beyond visual changes—it signifies our evolution into a more
          dynamic, client-focused organization. The new domain name reflects our
          transition into an exciting new era where technology and human expertise
          converge to create unparalleled trading experiences.
        </p>

        <blockquote class="blog-quote">
          "This rebrand represents our promise to build not just better platforms, but
          better partnerships with every client we serve."
        </blockquote>

        <h2>Next-Generation Services Designed for You</h2>
        <p>
          As part of our transformation, we'll be introducing a suite of innovative
          services crafted to meet the evolving needs of modern traders. From intuitive
          trading interfaces to advanced analytical tools, every enhancement is designed
          with your success in mind.
        </p>

        <h2>Reinforced Infrastructure for Unmatched Performance</h2>
        <p>
          We've invested significantly in our technological backbone, building
          infrastructure that delivers lightning-fast execution, robust security, and
          seamless scalability. This foundation ensures we can grow alongside your
          ambitions while maintaining the reliability you deserve.
        </p>
      </div>

      <footer class="blog-footer">
        <div class="author-bio">
          <div class="author-avatar"></div>
          <div class="author-info">
            <h3>About BVX</h3>
            <p>
              BVX is a forward-thinking trading company committed to delivering
              exceptional service through innovative technology and client-centered
              solutions. Our rebranding initiative reflects our dedication to shaping the
              future of trading.
            </p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blog-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4efe9 100%);
  padding: 40px 20px;

  .blog-content {
    max-width: 800px;
    margin: 0 auto;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
    padding: 50px;

    .blog-header {
      margin-bottom: 35px;
      padding-bottom: 25px;
      border-bottom: 1px solid #eaeaea;

      .blog-title {
        font-size: 2.6rem;
        font-weight: 700;
        background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 18px;
        line-height: 1.2;
      }

      .blog-meta {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        color: #7f8c8d;
        font-size: 0.9rem;

        .author {
          font-weight: 600;
          color: #27ae60;
        }
      }
    }

    .blog-body {
      line-height: 1.7;
      color: #34495e;

      .blog-intro {
        font-size: 1.25rem;
        margin-bottom: 30px;
        color: #2c3e50;
        font-weight: 500;
        background-color: #f8f9fa;
        padding: 20px;
        border-radius: 8px;
        border-left: 4px solid #27ae60;
      }

      h2 {
        font-size: 1.7rem;
        margin: 35px 0 18px;
        color: #2c3e50;
        position: relative;
        padding-bottom: 8px;

        &:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 3px;
          background: linear-gradient(90deg, #3498db, #27ae60);
          border-radius: 2px;
        }
      }

      p {
        margin-bottom: 22px;
      }

      .blog-quote {
        border-left: 4px solid #27ae60;
        padding: 25px;
        margin: 30px 0;
        font-style: italic;
        color: #5a6c7d;
        font-size: 1.15rem;
        background-color: #f8f9fa;
        border-radius: 0 8px 8px 0;
      }

      .blog-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 35px;

        .tag {
          background: linear-gradient(135deg, #3498db 0%, #27ae60 100%);
          padding: 6px 15px;
          border-radius: 20px;
          font-size: 0.85rem;
          color: white;
          font-weight: 500;
        }
      }
    }

    .blog-footer {
      margin-top: 45px;
      padding-top: 35px;
      border-top: 1px solid #eaeaea;

      .author-bio {
        display: flex;
        gap: 20px;
        align-items: flex-start;

        .author-avatar {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3498db 0%, #27ae60 100%);
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 1.5rem;
        }

        .author-info {
          h3 {
            margin: 0 0 12px;
            color: #2c3e50;
          }

          p {
            margin: 0;
            color: #5a6c7d;
            line-height: 1.6;
          }
        }
      }
    }
  }
}

// Responsive adjustments
@media (max-width: 768px) {
  .blog-container {
    padding: 20px 10px;

    .blog-content {
      padding: 30px 20px;

      .blog-header {
        .blog-title {
          font-size: 2.1rem;
        }

        .blog-meta {
          flex-direction: column;
          gap: 8px;
        }
      }

      .blog-footer {
        .author-bio {
          flex-direction: column;
          text-align: center;

          .author-avatar {
            align-self: center;
            width: 60px;
            height: 60px;
            font-size: 1.2rem;
          }
        }
      }
    }
  }
}
</style>
