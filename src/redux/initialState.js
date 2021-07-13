import books from '../assets/images/books.jpg';
import cat from '../assets/images/cat.jpg';
import phone from '../assets/images/phone.jpg';
import computer from '../assets/images/computer.jpg';
import headphone from '../assets/images/headphone.jpg';

export const initialState = {
  posts: {
    data: [
      {
        id: 1,
        title: 'Books!',
        price: 30,
        content: 'Hello, I am selling my books',
        email: 'abc@example.com',
        telephone: 123456789,
        image: books,
        date: '01.01.2021',
      
      },
      {
        id: 2,
        title: 'cat!',
        price: 100,
        content: 'Hello, I am selling my cat',
        email: 'cde@example.com',
        telephone: 123456789,
        image: cat,
        date: '02.02.2021',

      },
      {
        id: 3,
        title: 'phone!',
        price: 500,
        content: 'Hello, I am selling my phone',
        email: 'fgh@example.com',
        telephone: 123456789,
        image: phone,
        date: '28.03.2021',

      },
      {
        id: 4,
        title: 'computer',
        price: 900,
        content:'Hello, I am selling my computer',
        email: 'ijk@example.com',
        telephone: 123456789,
        image: computer,
        date: '03.02.2021',

      },
      {
        id: 5,
        title: 'headphone',
        price: 200,
        content: 'Hello, I am selling my headphone',
        email: 'lmn@example.com',
        telephone: 123456789,
        image: headphone,
        date: '03.03.2021',

      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },

  auth: {
    isLogged: true,
    login: '', 
  },
};
