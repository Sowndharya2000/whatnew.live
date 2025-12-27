import { useState } from 'react';
import './Blog.css';

function App() {
  const [activeTab, setActiveTab] = useState(1);

  const tabsData = [
    {
      id: 1,
      name: 'Latest',
      items: [
        { title: 'Product, Latest 7/8/25', description: 'Product Spotlight: Weekly Order Reports, Seller Hub Home, and Improvements to Order & Shipment Search.', image: 'assets/01.jpg' },
        { title: 'Community, Latest, and Whatnew 6/27/25', description: 'How a Pop Mart Toy Became a Household Name: The Rise of Labubu.', image: 'assets/02.png' },
        { title: 'Community, Latest, and Whatnew 6/12/25', description: 'Where High Fashion Meets High Engagement: Selling Luxury on Whatnew.', image:'assets/03.png' },
        { title: 'Product, Latest 5/15/25', description: 'A Refreshed Look for Whatnew.', image: 'assets/04.png' },
        { title: 'Community, Latest 5/7/25', description: 'Why Golf on Whatnew May Be Your Next Big Opportunity.', image: 'assets/05.png' },
        { title: 'Community, Latest, and Whatnew 5/1/25', description: 'WhatnewCon Returns - The Worlds Largest Virtual Comic Con.', image: 'assets/06.jpeg' },
        { title: 'Community, Latest 4/16/25', description: 'Adudehits Becomes First Woman-Owned Business to Hit 1M in Weekly Sales on Whatnew.', image:'assets/07.jpg' },
        { title: 'Product, and Whatnew, Latest, Community 3/27/25', description: 'Europes Live Selling Revolution: Whatnews 2025 Market Report.', image: 'assets/08.jpg' },
        { title: 'Community, Latest, and Whatnew 2/14/25', description: 'Whatnew Celebrates Black-Owned Businesses', image: 'assets/10.png' },
      ]
    },

    {
      id: 2,
      name: 'Community',
      items: [
        { title: 'Community, Latest 1/15/25', description: 'From Seller to Whatnew Employee — Join Us!.', image: 'assets/16.png' },
        { title: 'Community, Latest, and Whatnew 6/27/25', description: 'How a Pop Mart Toy Became a Household Name: The Rise of Labubu.', image: 'assets/02.png' },
        { title: 'Community, Latest, and Whatnew 6/12/25', description: 'Where High Fashion Meets High Engagement: Selling Luxury on Whatnew.', image:'assets/03.png' },
        { title: 'Product, Latest 5/15/25', description: 'A Refreshed Look for Whatnew.', image: 'assets/04.png' },
        { title: 'Community, Latest 5/7/25', description: 'Why Golf on Whatnew May Be Your Next Big Opportunity.', image: 'assets/05.png' },
        { title: 'Community, Latest, and Whatnew 5/1/25', description: 'WhatnewCon Returns - The Worlds Largest Virtual Comic Con.', image: 'assets/06.jpeg' },
        { title: 'Community, Latest 4/16/25', description: 'Adudehits Becomes First Woman-Owned Business to Hit 1M in Weekly Sales on Whatnew.', image:'assets/07.jpg' },
        { title: 'Community, Latest, and Whatnew 11/1/24', description: 'Holiday Tips from Sellers.', image: 'assets/14.png' },
        { title: 'Community, Latest, and Whatnew 2/14/25', description: 'Whatnew Celebrates Black-Owned Businesses.', image: 'assets/10.png' },
      ]
    },

    {
      id: 3,
      name: 'Product',
      items: [
        { title: 'Product, Latest 7/8/25', description: 'Product Spotlight: Weekly Order Reports, Seller Hub Home, and Improvements to Order & Shipment Search.', image: 'assets/01.jpg' },
        { title: 'Community, Latest, and Whatnew 6/27/25', description: 'How a Pop Mart Toy Became a Household Name: The Rise of Labubu.', image: 'assets/02.png' },
        { title: 'Community, Latest, and Whatnew 6/12/25', description: 'Where High Fashion Meets High Engagement: Selling Luxury on Whatnew.', image:'assets/03.png' },
        { title: 'Product, Latest 5/15/25', description: 'A Refreshed Look for Whatnew.', image: 'assets/04.png' },
        { title: 'Community, Latest 5/7/25', description: 'Why Golf on Whatnew May Be Your Next Big Opportunity.', image: 'assets/05.png' },
        { title: 'Community, Latest, and Whatnew 5/1/25', description: 'WhatnewCon Returns - The Worlds Largest Virtual Comic Con.', image: 'assets/06.jpeg' },
        { title: 'Community, Latest 4/16/25', description: 'Adudehits Becomes First Woman-Owned Business to Hit 1M in Weekly Sales on Whatnew.', image:'assets/07.jpg' },
        { title: 'Product, and Whatnew, Latest, Community 3/27/25', description: 'Europes Live Selling Revolution: Whatnews 2025 Market Report.', image: 'assets/08.jpg' },
        { title: 'Community, Latest, and Whatnew 11/1/24', description: 'Holiday Tips from Sellers.', image: 'assets/14.png' },
        { title: 'Community, Latest, and Whatnew 2/14/25', description: 'Whatnew Celebrates Black-Owned Businesses.', image: 'assets/10.png' },
      ]
    },

    {
      id: 4,
      name: 'Trust And Safety',
      items: [
        { title: 'Trust and Safety, Latest 9/18/24', description: 'Our Easier-to-Read -and-Understand Policies.', image: 'assets/18.png' },
        { title: 'Trust and Safety, Latest 8/21/24', description: 'How We Think About Harassment on Whatnew (with New Policy Updates).', image: 'assets/18.png' },
        { title: 'Trust and Safety, Latest 4/18/24', description: 'Our Ongoing Work: Tackling Scams on Whatnew.', image:'assets/18.png' },
        { title: 'Community, Product, Trust and Safety, and Whatnew, Latest 1/25/24', description: 'What’s up on Whatnew: A letter from our CEO.', image: 'assets/19.jpg' },
        { title: 'Trust and Safety, Latest 8/10/23', description: 'Whatnew’s Head of Sports on Policy, Growth, and Future Plans.', image: 'assets/21.jpg' },
        { title: 'Trust and Safety, Latest 6/23/23', description: 'Introducing Trust and Safety Metrics for Sellers.', image: 'assets/18.png' },
      ]
    },

    {
      id: 5,
      name: 'And Whatnew',
      items: [
        { title: 'Community, Latest, and Whatnew 6/27/25', description: 'How a Pop Mart Toy Became a Household Name: The Rise of Labubu.', image: 'assets/02.png' },
        { title: 'Community, Latest, and Whatnew 6/12/25', description: 'Where High Fashion Meets High Engagement: Selling Luxury on Whatnew.', image:'assets/03.png' },
        { title: 'Product, Latest 5/15/25', description: 'A Refreshed Look for Whatnew.', image: 'assets/04.png' },
        { title: 'Community, Latest 5/7/25', description: 'Why Golf on Whatnew May Be Your Next Big Opportunity.', image: 'assets/05.png' },
        { title: 'Community, Latest, and Whatnew 5/1/25', description: 'WhatnewCon Returns - The Worlds Largest Virtual Comic Con.', image: 'assets/06.jpeg' },
        { title: 'Community, Latest 4/16/25', description: 'Adudehits Becomes First Woman-Owned Business to Hit 1M in Weekly Sales on Whatnew.', image:'assets/07.jpg' },
        { title: 'Product, and Whatnew, Latest, Community 3/27/25', description: 'Europes Live Selling Revolution: Whatnews 2025 Market Report.', image: 'assets/08.jpg' },
        { title: 'Community, Latest, and Whatnew 11/1/24', description: 'Holiday Tips from Sellers.', image: 'assets/14.png' },
        { title: 'Community, Latest, and Whatnew 2/14/25', description: 'Whatnew Celebrates Black-Owned Businesses.', image: 'assets/10.png' },
      ]
    },
  ];

  const currentTabData = tabsData.find(tab => tab.id === activeTab);

  return (
    <div className="app-container">
      <div className="tabs-wrapper">
        <div className="tabs-header">
          {tabsData.map(tab => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name}
            </button>
          ))}
        </div>

        <div className="tabs-content">
          <div className="grid-container">
            {currentTabData?.items.map((item, index) => (
              <div key={index} className="grid-item">
                <div className="item-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <h3 className="item-title">{item.title}</h3>
                <p className="item-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
