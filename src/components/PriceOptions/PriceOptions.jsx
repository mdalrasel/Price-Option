import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
  const priceOption = [
    {
      "id": 1,
      "name": "Starter",
      "price": "$20/month",
      "features": ["Access to gym equipment", "Locker room access", "Basic fitness classes"]
    },
    {
      "id": 2,
      "name": "Bronze",
      "price": "$35/month",
      "features": ["Access to gym equipment", "Locker room access", "Full fitness classes schedule"]
    },
    {
      "id": 3,
      "name": "Silver",
      "price": "$50/month",
      "features": ["Access to gym equipment", "Locker room access", "Full fitness classes schedule", "Personal trainer consultation"]
    },
    {
      "id": 4,
      "name": "Gold",
      "price": "$70/month",
      "features": ["Access to gym equipment", "Locker room access", "Full fitness classes schedule", "Unlimited access to all facilities"]
    },
    {
      "id": 5,
      "name": "Platinum",
      "price": "$100/month",
      "features": ["Access to gym equipment", "Locker room access", "Full fitness classes schedule", "Unlimited access to all facilities", "Personal trainer sessions"]
    },
    {
      "id": 6,
      "name": "Weekend Warrior",
      "price": "$15/month",
      "features": ["Access to gym equipment", "Locker room access", "Weekend fitness classes"]
    },
    {
      "id": 7,
      "name": "Couples",
      "price": "$90/month",
      "features": ["Access to gym equipment", "Locker room access", "Full fitness classes schedule", "Unlimited access to all facilities", "Couple training sessions"]
    },
    {
      "id": 8,
      "name": "Student",
      "price": "$25/month",
      "features": ["Access to gym equipment", "Locker room access", "Basic fitness classes", "Student ID required"]
    },
    {
      "id": 9,
      "name": "Senior",
      "price": "$20/month",
      "features": ["Access to gym equipment", "Locker room access", "Basic fitness classes", "Senior citizens only"]
    },
    {
      "id": 10,
      "name": "Corporate",
      "price": "$60/month",
      "features": ["Access to gym equipment", "Locker room access", "Full fitness classes schedule", "Unlimited access to all facilities", "Corporate group sessions"]
    }
  ];
  

  return (
    <div className="m-12">
        <h2 className="text-3xl text-center font-extrabold underline">Best Prices in the town</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {
              priceOption.map( option =><PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
    </div>
  );
};

export default PriceOptions;