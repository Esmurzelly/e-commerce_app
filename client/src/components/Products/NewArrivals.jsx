import React, { useEffect, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from 'react-router-dom';

const NewArrivals = () => {
  const scrollRef = useRef(null);

  const [startX, setStartX] = useState(0); // начальная позиция курсора по оси X при начале перетаскивания
  const [isDragging, setIsDragging] = useState(false); // отслеживает, находится ли пользователь в процессе перетаскивания
  const [scrollLeft, setScrolllLeft] = useState(false); // начальное значение горизонтальной прокрутки контейнера при начале перетаскивания (сколько пикселей уже "прокручено" внутри scrollRef.current)

  const [allowScrollLeft, setAllowScrolllLeft] = useState(false);
  const [allowScrollRight, setAllowScrolllRight] = useState(true);

  const newArrivalsArray = [
    {
      _id: "1",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
          altText: "Stylish Jacket"
        }
      ]
    },
    {
      _id: "2",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=2",
          altText: "Stylish Jacket"
        }
      ]
    },
    {
      _id: "3",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
          altText: "Stylish Jacket"
        }
      ]
    },
    {
      _id: "4",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=4",
          altText: "Stylish Jacket"
        }
      ]
    },
    {
      _id: "5",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=5",
          altText: "Stylish Jacket"
        }
      ]
    },
    {
      _id: "6",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=6",
          altText: "Stylish Jacket"
        }
      ]
    },
    {
      _id: "7",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=7",
          altText: "Stylish Jacket"
        }
      ]
    },
    {
      _id: "8",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=8",
          altText: "Stylish Jacket"
        }
      ]
    },
  ];

  const handleMouseDown = e => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft); // e.pageX - координаты курсора мыши по оси X относительно всей страницы
    // setStartX - даёт позицию курсора относительно самого слайдера, а не всей страницы — где именно в пределах контейнера пользователь нажал мышью
    setScrolllLeft(scrollRef.current.scrollLeft);
  }

  const handleMouseMove = e => {
    if (!isDragging) return;

    const x = e.pageX - scrollRef.current.offsetLeft; //  позиция мыши внутри контейнера, а не на всей странице
    const walk = x - startX; // расстояние, которое "прошла" мышь от момента нажатия до текущего положения
    scrollRef.current.scrollLeft = scrollLeft - walk; // обновляется позиция прокрутки слайдера, чтобы следовать за движением мыши
  }

  const handleMouseUpOrLeave = e => {
    setIsDragging(false)
  }

  const scroll = direction => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const updateScrollButtons = () => {
    const container = scrollRef.current;

    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScrollable = container.scrollWidth > leftScroll + container.clientWidth;

      setAllowScrolllLeft(leftScroll > 0);
      setAllowScrolllRight(rightScrollable);
    }

    // console.log({
    //   scrollLeft: container.scrollLeft,
    //   clientWidth: container.clientWidth,
    //   containerScrollWidth: container.scrollWidth,
    //   offsetLeft: scrollRef.current.offsetLeft,
    // });
  }

  useEffect(() => {
    const container = scrollRef.current;

    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
      return () => container.removeEventListener("scroll", updateScrollButtons);
    }
  }, []);

  return (
    <section className='py-16 px-4 lg:px-0'>
      <div className="container relative mx-auto text-center mb-10">
        <h2 className='text-3xl font-bold mb-4'>Explore New Arrivals</h2>
        <p className='text-lg text-gray-600 mb-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo ducimus pariatur impedit?</p>

        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button onClick={() => scroll("left")} disabled={!allowScrollLeft} className={`p-2 rounded border ${allowScrollLeft ? "bg-white text-black" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}>
            <FiChevronLeft className='text-2xl' />
          </button>
          <button onClick={() => scroll("right")} disabled={!allowScrollRight} className={`p-2 rounded border ${allowScrollRight ? "bg-white text-black" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}>
            <FiChevronRight className='text-2xl' />
          </button>
        </div>
      </div>

      <div
        className={`container mx-auto overflow-x-scroll flex space-x-6 relative ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {newArrivalsArray.map((product) => (
          <div key={product._id} className='min-w-full sm:min-w-[50%] lg:min-w-[30%] relative'>
            <img className='w-full h-[500px] object-cover rounded-lg' draggable="false" src={product.images[0]?.url} alt={product.images[0]?.altText || product.name} />
            <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg">
              <Link to={`/product/${product._id}`} className='block'>
                <h4 className='font-medium'>{product.name}</h4>
                <p className='mt-1'>${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default NewArrivals