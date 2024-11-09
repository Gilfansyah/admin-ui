import Card from ".";

const CardGoals = () => {
    return (
      <>
        {/* bottom content start */}
        <div className="text-lg text-gray-02 mb-2">
          Expenses Goals by Category
        </div>
        <div className="mb-8 grid grid-row-1  md:grid-cols-3 gap-6">
          <div className="sm:w-1/3 md:w-full">
            <Card label="" />
          </div>
          <div className="sm:w-1/3 md:w-full">
            <Card label="" />
          </div>
          <div className="sm:w-1/3 md:w-full">
            <Card label="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse cumque eveniet inventore at natus, voluptate culpa eaque optio voluptas necessitatibus dicta in eius hic veritatis laborum iste, magnam voluptatum voluptatem?" />
          </div>
          <div className="sm:w-1/3 md:w-full">
            <Card label=" "/>
          </div>
          <div className="sm:w-1/3 md:w-full">
            <Card label="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse cumque eveniet inventore at natus, voluptate culpa eaque optio voluptas necessitatibus dicta in eius hic veritatis laborum iste, magnam voluptatum voluptatem?" />
          </div>
          <div className="sm:w-1/3 md:w-full">
            <Card label="" />
          </div>
        </div>
      </>
    );
  };
  
  export default CardGoals;