import './index.css'

const firstArray = [
  {
    id: 1,
    imgUrl:
      'https://a0.muscache.com/im/pictures/e35bb307-05f4-48a4-bdc5-3b2198bb9451.jpg?im_w=1200',
    heading: 'Most popular around the world',
  },
  {
    id: 2,
    imgUrl:
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Fetimg.etb2bimg.com%2Fphoto%2F89740602.cms&imgrefurl=https%3A%2F%2Ftravel.economictimes.indiatimes.com%2Fnews%2Fdestination%2Finternational%2Faustralia-tourism-to-encourage-tour-and-airline-operators-to-shore-up-summer-bookings-from-india%2F89740376&tbnid=z9i7PnTmmaGYoM&vet=12ahUKEwiZy-CZy5j7AhWAjNgFHWY4AIUQMygDegUIARDTAQ..i&docid=Vg4l9Uwn4-PdPM&w=8660&h=5773&q=tourism%20images&hl=en&ved=2ahUKEwiZy-CZy5j7AhWAjNgFHWY4AIUQMygDegUIARDTAQ',
    heading: 'Great for team building',
  },
  {
    id: 3,
    imgUrl:
      'https://a0.muscache.com/im/pictures/bcbd20bb-1654-4ea2-a86c-2cf25666f3b6.jpg?im_w=1200',
    heading: 'Fun for the family',
  },
]

const First = () => (
  <>
    <h1 className="first">New this week</h1>
    <div className="first-container">
      {firstArray.map(each => {
        let value = null
        switch (each.id) {
          case 1:
            value = 'first-img'
            break
          case 2:
            value = 'second-img'
            break
          case 3:
            value = 'third-img'
            break
          default:
            return null
        }

        return (
          <div className={`first-card ${value}`}>
            <div className="inner-card">
              <p className="para-color">Collection</p>
              <h1 className="heading-color1">{each.heading}</h1>
            </div>
            <button className="show-btn" type="button">
              Show all
            </button>
          </div>
        )
      })}
    </div>
  </>
)

export default First
