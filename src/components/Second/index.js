import {AiTwotoneStar} from 'react-icons/ai'

import './index.css'

const secondValue = [
  {
    id: 1,
    rating: '4.88(135) US',
    imgUrl:
      'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1718920-media_library/original/ca228931-6da0-4f13-96ec-a4079eaeb6c1.jpg?im_w=960',
    des: 'Plan the perfect New York Vacation',
    rep: '1450/-',
  },
  {
    id: 2,
    rating: '4(19) Spain',
    des: 'Design your trip to Barcelone with Gemma',
    rep: '3450/-',
    imgUrl:
      'https://a0.muscache.com/im/pictures/lombard/MtTemplate-2488061-active_media/original/f8647ede-fccf-449e-96fe-024f7973b86d.jpg?im_w=320',
  },
  {
    id: 3,
    rating: '3.8(158) South Korea',
    des: 'Craft a customer trip to Korea with jon',
    rep: '1450/-',
    imgUrl:
      'https://a0.muscache.com/im/pictures/lombard/MtTemplate-3010357-active_media/original/8f1d326c-915a-4b52-b8cc-c2de966d814b.jpg?im_w=320',
  },
  {
    id: 4,
    rating: '4.88(135) Mexico',
    des: 'Live Tulum like a local',
    rep: '675/-',
    imgUrl:
      'https://a0.muscache.com/im/pictures/lombard/MtTemplate-2563542-active_media/original/3d27c5fb-cf72-45be-b642-96a30800a375.jpg?im_w=320',
  },
  {
    id: 5,
    rating: '3.8(76) Austin',
    des: 'Plan a trip to amazing Austin',
    rep: '1450/-',
    imgUrl:
      'https://a0.muscache.com/im/pictures/lombard/MtTemplate-2596268-active_media/original/7c87c5f0-28ab-47fb-84bd-4805bf8680a6.jpeg?im_w=320',
  },
  {
    id: 6,
    rating: '4.2(93) Italy',
    des: 'Creat your Rome Itinerary with Debora',
    rep: '1350/-',
    imgUrl:
      'https://a0.muscache.com/im/pictures/lombard/MtTemplate-3134396-active_media/original/bdc8c92f-dc25-465f-af0f-0307647e31dd.jpg?im_w=320',
  },
  {
    id: 7,
    rating: '4.2(93) Italy',
    des: 'Plan a Venice Venture with Giulia',
    rep: '1350/-',
    imgUrl:
      'https://a0.muscache.com/im/pictures/lombard/MtTemplate-3134396-active_media/original/40f326f8-703f-4fe3-953f-8581882cd2af.jpg?im_w=320',
  },
  {
    id: 8,
    rating: '4.7(43) US',
    des: 'Plan a Trip To Nashville with a Local insider',
    rep: '990/-',
    imgUrl:
      'https://a0.muscache.com/im/pictures/lombard/MtTemplate-2493134-active_media/original/de271744-1a5e-4d07-afa1-04aa8b0a3228.jpeg?im_w=320',
  },
  {
    id: 9,
    rating: '5.0(236) Japan',
    des: 'Plan a perfect trip to Sunny Miami',
    rep: '1371/-',
    imgUrl:
      'https://a0.muscache.com/im/pictures/lombard/MtTemplate-2493134-active_media/original/90ff3c19-817e-48a5-be2e-2316a55852dd.jpeg?im_w=320',
  },
  {
    id: 10,
    rating: '4.99(236) Spain',
    des: 'No spain No game the Fabulous',
    rep: '999/-',
    imgUrl:
      'https://a0.muscache.com/im/pictures/lombard/MtTemplate-2493583-active_media/original/41e41ce9-c713-4526-9c28-d8aab2b1bf82.jpeg?im_w=320',
  },
  {
    id: 11,
    rating: '4.69(236) France',
    des: 'From Paris with Laughs The Scavenging',
    rep: '999/-',
    imgUrl:
      'https://a0.muscache.com/im/pictures/lombard/MtTemplate-2493583-media_library/original/93c8ba9c-9312-4723-a6df-e43c96503d22.jpeg?im_w=240',
  },
  {
    id: 12,
    rating: '4.55(236) Poland',
    des: 'Murder Mystery Escape room Game-perfect',
    rep: '999/-',
    imgUrl:
      'https://a0.muscache.com/im/pictures/lombard/MtTemplate-2493583-media_library/original/55ec5021-45c8-4951-9ee9-efea15981225.jpeg?im_w=240',
  },
]

const Second = () => (
  <>
    <h1 className="second-heading">
      Plan a trip with help from local Hosts around the world
    </h1>
    <div className="second-ul-card">
      {secondValue.map(eachItem => (
        <div className="second-li-card" key={eachItem.id}>
          <img className="second-img" src={eachItem.imgUrl} alt="country" />
          <div className="star-icon">
            <AiTwotoneStar />
            <p>{eachItem.rating}</p>
          </div>
          <p className="second-des">{eachItem.des}</p>
          <p>
            <span className="second-span">From {eachItem.rep}</span>/person
          </p>
        </div>
      ))}
    </div>
  </>
)

export default Second
