function loadContent(topic) {
    const contentArea = document.getElementById('content');
    const topics = {
    topic1: `<h2>Introduction</h2><p>Technology is transforming every
     aspect of our lives, from communication to productivity. 
     It continues to evolve, shaping how we connect, work, 
     and solve problems in daily life.</p>`,
    
    topic2: `<h2>Installation</h2><p>Installing modern technology systems 
    has become streamlined with user-friendly guides and interfaces, 
    ensuring even beginners can navigate the setup process effectively.</p>`,
    
    topic3: `<h2>Configuration</h2><p>Configuration settings allow users to 
    personalize their technology experience, enhancing usability and 
    adapting to individual needs across diverse applications.</p>`,
    
    topic4: `<h2>Usage</h2><p>From simple tasks to complex solutions, 
    technology usage spans various fields, empowering users with 
    the tools and resources necessary to achieve their goals efficiently.</p>`,
    
    topic5: `<h2>Advanced Topics</h2><p>Advanced technology topics cover AI, 
    machine learning, and blockchain—innovative fields revolutionizing industries 
    and creating new possibilities for automation and data security.</p>`,
    
    topic6: `<h2>Troubleshooting</h2><p>Technology issues can arise unexpectedly; 
    troubleshooting guides offer step-by-step solutions, 
    helping users quickly resolve problems and optimize device performance.</p>`
};
    contentArea.innerHTML = topics[topic];
}