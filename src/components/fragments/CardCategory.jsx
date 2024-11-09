import Card from "../elements/Card";

const CardCategory = () => {
    return (
      <div>
        <div className="text-lg text-gray-02 mb-2">Goal</div>
        <div className="mb-8 flex flex-col min-h-[150px]  md:flex-row  gap-6">
          <div className="w-full md:w-2/3">
            <Card label="" />
          </div>
          <div className="">
            <Card label="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse cumque eveniet inventore at natus, voluptate culpa eaque optio voluptas necessitatibus dicta in eius hic veritatis laborum iste, magnam voluptatum voluptatem?" />
          </div>
        </div>
      </div>
    );
  };
  
  export default CardCategory;