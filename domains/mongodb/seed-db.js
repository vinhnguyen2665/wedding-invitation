
const SeedDB = {
  user: {
    email: "vinhnguyen2665@gmail.com",
    username: "admin",
    password: "$2b$10$VhmfGtzS9/IZPQuLQhmXkeTZmXrHYjIV2HCRfsOEp66Yk/OJiwow2", //123qwe
    password_confirm: "$2b$10$VhmfGtzS9/IZPQuLQhmXkeTZmXrHYjIV2HCRfsOEp66Yk/OJiwow2",
    role: "admin"
  },
  dataConfig: {
    male: {
      name: "Nguyễn Quang Vinh",
      parent: {
        father: "",
        mother: "Nguyễn Thị Thâu"
      },
      location: {
        text: "Nhà hàng H2T - Kim Chung",
        map: "https://maps.app.goo.gl/PyHqsqtNqQz4cFPj8"
      },
      time_start: {
        date: {
          lunar: {
            day: "19",
            month: "11",
            year: "2024"
          },
          solar: {
            day: "19",
            month: "12",
            year: "2024"
          },
          day_of_week: "5",
        },
        time: {
          hour: "16",
          minute: "00"
        }
      },
      finances: [{
        provider_name: "Vietcombank",
        provider_number: "0451000472527",
        holder_name: "NGUYEN QUANG VINH",
        qr_url: "/assets/images/vcb-vinh.png"
      }],
      email: "vinhnguyen2665@gmail.com",
      phone: "0963319296",
      bg: '/assets/images/_EXO2386.png',
      bg_fb: '/assets/images/bg-fb.jpg'
    },
    female: {
      name: "Nguyễn Thị Bích Quyền",
      parent: {
        father: "",
        mother: "Trương Thị Lý"
      },
      location: {
        text: "Nhà hàng Công Đoàn - TP Tuy Hoà",
        map: "https://maps.app.goo.gl/VumPDMn33mwiqbUPA"
      },
      time_start: {
        date: {
          lunar: {
            day: "09",
            month: "11",
            year: "2024"
          },
          solar: {
            day: "09",
            month: "12",
            year: "2024"
          },
          day_of_week: "2",
        },
        time: {
          hour: "10",
          minute: "00"
        }
      },
      finances: [{
        provider_name: "Vietcombank",
        provider_number: "1029592566",
        holder_name: "NGUYEN THI BICH QUYEN",
        qr_url: "/assets/images/vcb-quyen.png"
      }
      ],
      email: "quyenntb25@gmail.com ",
      phone: "0345294506",
      bg: '/assets/images/_EXO2386.png',
      bg_fb: '/assets/images/bg-fb.jpg'
    },
    default: true
  }
};

module.exports = SeedDB;
