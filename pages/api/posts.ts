// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (_req:any, res:any) => {
  res.statusCode = 200
  const posts = [
    {
      "title":"Test Blue Lake Nature Water",
      "summary":"Water Water",
      "content": "",
      "images": {
        "image": "https://d1scqmg455ghwr.cloudfront.net/images/blue-lake-nature-water-40465.jpg",
        "thumbnail": "https://d1scqmg455ghwr.cloudfront.net/images/blue-lake-nature-water-40465.jpg"
      }
    },
    {
      "title":"Test Blue Lake Nature Water",
      "summary":"Water Water",
      "content": "",
      "images": {
        "image": "https://d1scqmg455ghwr.cloudfront.net/images/blue-lake-nature-water-40465.jpg",
        "thumbnail": "https://d1scqmg455ghwr.cloudfront.net/images/blue-lake-nature-water-40465.jpg"
      }
    },
    {
      "title":"Test Blue Lake Nature Water",
      "summary":"Water Water",
      "content": "",
      "images": {
        "image": "https://d1scqmg455ghwr.cloudfront.net/images/blue-lake-nature-water-40465.jpg",
        "thumbnail": "https://d1scqmg455ghwr.cloudfront.net/images/blue-lake-nature-water-40465.jpg"
      }
    },
    {
      "title":"Test Blue Lake Nature Water",
      "summary":"Water Water",
      "content": "",
      "images": {
        "image": "https://d1scqmg455ghwr.cloudfront.net/images/blue-lake-nature-water-40465.jpg",
        "thumbnail": "https://d1scqmg455ghwr.cloudfront.net/images/blue-lake-nature-water-40465.jpg"
      }
    },
  ];
  res.json(posts)
}
