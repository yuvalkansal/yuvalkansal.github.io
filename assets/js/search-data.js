// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Yuval Kansal&#39;s selected Academic Publications and Research Papers.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Yuval Kansal&#39;s CV",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-scaling-rl-to-non-verifiable-domains-through-symbolic-abstractions",
        
          title: "Scaling RL to Non-Verifiable Domains Through Symbolic Abstractions",
        
        description: "RLSAF - Reinforcement Learning from Symbolic Abstraction Feedback",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/scaling-rl-to-non-verifiable-domains/";
          
        },
      },{id: "post-thoughts-about-rl-and-where-it-is-headed",
        
          title: "Thoughts About RL and Where It Is Headed",
        
        description: "Reflections on reinforcement learning trends from NeurIPS 2025",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/thoughts-about-rl-and-where-it-is-headed/";
          
        },
      },{id: "post-learnings-from-neurips-2025",
        
          title: "Learnings from NeurIPS 2025",
        
        description: "Key takeaways and insights from attending NeurIPS 2025",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/learnings-from-neurips-2025/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-graduated-from-unsw-sydney-with-a-bachelor-in-computer-engineering-honours-class-1",
          title: 'Graduated from UNSW Sydney with a Bachelor in Computer Engineering (Honours Class 1)...',
          description: "",
          section: "News",},{id: "news-moved-to-the-us-and-started-my-phd-at-princeton-university",
          title: 'Moved to the US and started my PhD at Princeton University! 🎉',
          description: "",
          section: "News",},{id: "news-awarded-with-the-the-hisashi-and-masae-kobayashi-67-fellowship-fund-for-the-2024-25-academic-year",
          title: 'Awarded with the The Hisashi and Masae Kobayashi *67 Fellowship Fund for the...',
          description: "",
          section: "News",},{id: "news-we-have-released-our-paper-bottom-up-domain-specific-superintelligence-a-reliable-knowledge-graph-is-what-we-need-a-new-paradigm-to-approach-superintelligence",
          title: 'We have released our paper “Bottom-up Domain-specific Superintelligence: A Reliable Knowledge Graph is...',
          description: "",
          section: "News",},{id: "news-we-have-released-our-paper-knowledge-graphs-are-implicit-reward-models-path-derived-signals-enable-compositional-reasoning-a-new-paradigm-to-automatically-derive-reward-signals-and-enabling-compositionality",
          title: 'We have released our paper “Knowledge Graphs are Implicit Reward Models: Path-Derived Signals...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%75%76%61%6C%6B%61%6E%73%61%6C@%70%72%69%6E%63%65%74%6F%6E.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/yuvalkansal", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yuvalkansal", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0004-4457-5604", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=UincfVYAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/yuvalkansal", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
