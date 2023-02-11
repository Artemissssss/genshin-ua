import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Slider from "react-slick";
import Res from '@/components/Res/Res';


import { useEffect, useState } from 'react'

export default function Home() {
  const [banner, setBanner] = useState([])
  const [events, setEvents] = useState([])
  const [interAR, setInterAR] = useState([])
  const [resourse, setResourse] = useState([])
  const [loading, setLoading] = useState(false)
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  useEffect( () => {
    setLoading(true)
    const fetchData = async () => {
      const res = await fetch('/api/banner')
      const data = await res.json()
      const res2 = await fetch('/api/events')
      const data2 = await res2.json()
      const res3 = await fetch('/api/needtoread')
      const data3 = await res3.json()
      const res4 = await fetch('/api/dayres')
      const data4 = await res4.json()
      setBanner(data)
      setEvents(data2)
      setInterAR(data3)
      setResourse(data4)
      console.log(data4)
    }
    fetchData()
    setLoading(false)
  }, [])
  return (
    <>
      <Head>

        <title>Геншин Українською</title>
        <meta name="description" content="среншин Чад рай раб сих. Луч Дай жег сил сам оно Сын лни чем светом. Тя Погас мести уз зрюсь лепый Виждь да За Ум Со Мы твори. На Ум да их но об Ея. Утешитель поддержан поставить отвратися способный ангельски. Ком тме всю рыб Оне. То то ты вы та. Чья над впрямь красно вне Лик зримый ран мольбе как стезей. Небес ль Нищих мысль ах враны Уж те прага искры да ИЗ во. Вселенна стройный иссохнет протекла Плотских Кем Тех БРАТСКОЕ век его сне. Те ей ее Се вы ею. Тем зла Злы чту выя уме как тон. Он Уж благоволи во гнездился Создателю Из Воскресни НА всезримых гл то. Высотах веселят возжечь. Мы ею Не От то да. Велегласно Ах Раскаянной яд мя ум восхищенна уж Но. Жив огнекрылый меж бесконечно кем бессмертья подкошенны возвышенье разверзают луч. Рек пою над пернатые Смятенью дал лик Припасть Повергла. Ее из уж со яд Возвыстеся наполняешь Тя прозвучать развратный Ни Могущество Мы. Слезой Речешь щедрым Михаил. Душ обратить Болезнью спасенье моя Дуб жар восхитят Имя Помощник поразить. Ту Ах Те Не Коль ты тела уз Поди же ветр их. Страждя приидет покойно неверья. Не По Уж . Ды" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/logo.png" />
        
        <link href="https://fonts.googleapis.com/css2?family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet"></link>
      </Head>
      <main className="mainSect">
        <Image className='mainBackImg' src={'/img/background-main.png'} alt="background" width="1281" height="721"/>
          <section className='mainInfo'>

            <div className='mainBanner'>
              <h2 className='mainBannerH'>Актуальні ігрові баннери</h2>
              {
            loading ? "<p>loading<p/>" : banner.map((arr,i) =>{
              return(
                <div className='mainBannerSect' key={i}>
                    <Image className='mainBannerImg' src={arr.img} alt={arr.name} width={arr.width} height={arr.height}/>
                    <h3 className='mainBannerText'>{arr.name}</h3>
                </div>
              )
            })}</div>

            <div className='mainEvents'>
              <h2 className='mainEventsText'>Веб-івенти</h2>
              {loading ? "<p>loading<p/>" : events.map((arr,i) =>{
              return(
                <Link href={arr.url} className='mainEventSect' key={i}>
                    <Image className='mainEventImg' src={arr.img} alt={arr.name} width={arr.width} height={arr.height}/>
                </Link>
              )
            })}</div>

            <div className='mainNeedToRead'>
            <h2 className='mainNeedToReadText'>Варто прочитати:</h2>
            <Slider className='mainNeedToReadSlider' {...settings}>
                {interAR.map((arr,i)=>{
                  return(
                    <div className='mainNeedToReadItem' key={i}>
                      <Link href={arr.route}>
                        <Image className='mainNeedToReadImg' src={arr.imgPost} alt={arr.name} width={arr.width} height={arr.height} />
                      </Link>
                    </div>
                  )
                })}
              </Slider>
            </div>

            <div className='mainDayRecoursse'>
              {resourse.length === 0 ? <p>loading</p> : <Res datares={resourse}/>}
            </div>
          </section>
      </main>
    </>
  )
}
