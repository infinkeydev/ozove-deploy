import React from "react";

function SectionTwo({ contentDate }) {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const currentDate = new Date(); 3
  const contentDateTime = new Date(contentDate);
  const timeDifference = currentDate - contentDateTime;
  let formattedTime;
  if (timeDifference < 60 * 1000) {
    formattedTime = "a few seconds ago";
  } else if (timeDifference < 60 * 60 * 1000) {
    const minutesAgo = Math.floor(timeDifference / (60 * 1000));
    formattedTime = `${minutesAgo} minute${minutesAgo !== 1 ? 's' : ''} ago`;
  } else if (timeDifference < 24 * 60 * 60 * 1000) {
    const hoursAgo = Math.floor(timeDifference / (60 * 60 * 1000));
    formattedTime = `${hoursAgo} hour${hoursAgo !== 1 ? 's' : ''} ago`;
  } else if (timeDifference < 2 * 24 * 60 * 60 * 1000) {
    formattedTime = "yesterday";
  } else {
    const daysAgo = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
    formattedTime = `${daysAgo} day${daysAgo !== 1 ? 's' : ''} ago`;
  }

    const formattedDate = `${contentDateTime.getDate()}.${contentDateTime.getMonth() + 1}.${contentDateTime.getFullYear()}`;


  return (
    <div className="container">
      <span className="blog_text_Date mt-4">
        {formattedDate}<hr />{formattedTime}
      </span>
      <div className="blog_text_margin">
        <div className="my-3">
          <p className="blog_detail_text_head">
            The retail business is growing at a rapid rate today. In this age of e-commerce businesses, retail stores are highly dependent upon logistics for streamlined and hassle-free delivery of goods. Retail logistics proves to be an excellent combination to ensure a speedy delivery with the use of the latest technology and complete customer satisfaction. This is where OZ OVE, a game-changer in the industry, comes into play.
          </p>
        </div>
        <p className="blog_detail_text_desc my-2">Role of Logistics in the Retail Industry</p>
        <div className="my-3">
          <span className="blog_detail_text_head"> The future of retail stores is dependent entirely on logistics. A survey also states that the global worth of the logistics industry will increase from $244.62 Billion in 2022 to $ 592.81 Billion by 2030. This is the core <span className="text-socialiconyellow fw-600"> Importance of logistics management </span>in a retail business.</span>
        </div>
        <p className="blog_detail_text_desc my-2">Types of Retail Businesses</p>
        <div className="my-3">
          <span className="blog_detail_text_head">
            There are eight main types of retail businesses based on the quantity and type of goods they store. These include departmental stores, specialty stores, supermarkets, convenience stores, discount stores, warehouse stores, e-commerce stores, and drug stores. Each of these retail businesses has unique logistics needs, and OZ OVE caters to all of them with its comprehensive logistics solutions.
          </span>
        </div>
        <p className="blog_detail_text_desc my-2">Functions of Logistics Management</p>
        <div className="my-3">
          <span className="blog_detail_text_head"> Our mobile and web app make it easy for customers to access an on-demand fleet. With an easy order process, businesses can scale their operations using our technology.
            An efficient retail logistics system is capable of maintaining the balance throughout the demand and supply chain of the market. Here are some key functions that are performed by retail logistics:
          </span>
        </div>
        <div className="my-3">
          <span className="blog_detail_text_head fw-600 fs-5">Timely Delivery of Products:</span><span className="blog_detail_text_head"> OZ OVE ensures that any product order from a retail store reaches the customer well within the time duration. Along with this, it also ensures that there are no errors in the delivery of the product.
          </span>
        </div>
        <div className="my-3">
          <span className="blog_detail_text_head fw-600 fs-5">Product Quality is Maintained:</span><span className="blog_detail_text_head"> OZ OVE also ensures that the product reaches the customer as they want it to. This involves ensuring a damage-free delivery of goods.
          </span>
        </div>
        <div className="my-3">
          <span className="blog_detail_text_head fw-600 fs-5">Provides Efficient Customer Service:</span><span className="blog_detail_text_head"> Lastly, OZ OVE ensures that any query which is being faced by the customer is resolved quickly. Therefore, they can help retail stores to deliver their products on time.
          </span>
        </div>
        <p className="blog_detail_text_desc my-2">Typical Logistics Issues in Retail Businesses</p>
        <div className="my-3">
          <span className="blog_detail_text_head"> Although the role of retailing and logistics is to enhance the demand and supply management of the sector, there are some major issues faced by retail businesses in Australia when it comes to the use of logistics in retail. These include increasing expectations of customers, lack of inventory measurements and visibility, complexity and disruption in the supply chain, high costs for small-scale retailers, and labor shortages. OZ OVE addresses these challenges with its innovative logistics solutions.
          </span>
        </div>
        <p className="blog_detail_text_head fw-700 fs-5 my-2">6 Benefits of Logistics Management</p>
        <div className="my-3">
          <span className="blog_detail_text_head">
            There are a lot of benefits that come with the involvement of logistics in retail. These include greater visibility into the supply chain, improved efficiency in delivery services, cost savings and increased revenue for retail businesses, enhanced customer satisfaction and loyalty, adaptability to market changes and trends, and utilization of logistics technology for improved operations.
          </span>
        </div>
        <p className="blog_detail_text_head fw-700 fs-5 my-2">Conclusion</p>
        <div className="my-3">
          <p className="blog_detail_text_head">The value of<span className="text-socialiconyellow fw-600"> Logistics for Retail Stores </span> is immense, and investing in efficient logistics management is crucial for growth and success in the retail industry. OZ OVE&apos;s logistics solutions offer numerous benefits to retail businesses, from <span className="text-socialiconyellow fw-600"> Streamlined Delivery Services </span>to efficient inventory management. Explore OZ OVE&apos;s services today and experience the advantages yourself.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
