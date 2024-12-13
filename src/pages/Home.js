import React from 'react';

const Home = () => {
  // ตัวอย่างเมนู 4 รายการพร้อมภาพ
  const menuItems = [
    {
      name: 'Burger',
      image: 'https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg', // รูปตัวอย่างของ Burger
      description: 'A delicious beef burger with cheese and lettuce.',
    },
    {
      name: 'Pizza',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFdBqLt2SMojdkOjmfbKmS7aXj6kx592FmlWYDaHD2c5lfUc6rF-XwiaflTF0oQw-cJhw&usqp=CAU', // รูปตัวอย่างของ Pizza
      description: 'Tasty pizza with pepperoni and extra cheese.',
    },
    {
      name: 'Pasta',
      image: 'https://www.allrecipes.com/thmb/IrY572TXic4UXXVn8EetsarI3S0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-269500-creamy-garlic-pasta-Beauties-4x3-f404628aad2a435a9985b2cf764209b5.jpg', // รูปตัวอย่างของ Pasta
      description: 'Creamy pasta with Alfredo sauce.',
    },
    {
      name: 'Salad',
      image: 'https://www.allrecipes.com/thmb/N1kZohqcz2q1zzEQoTrwnWrPYdA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-14452-green-salad-VAT-hero-2x1-9e7e5f412a46486d888bd247d3ae1825.jpg', // รูปตัวอย่างของ Salad
      description: 'Fresh vegetable salad with olive oil dressing.',
    },
  ];

  return (
    <div style={styles.bodyContainer}>
      <h1 style={styles.mainText}>Are you starving?</h1>
      <p style={styles.subText}>Within a few clicks, find meals that are accessible near you</p>
      
      {/* กล่องข้อความและปุ่ม Delivery/Pickup */}
      <div style={styles.inputContainer}>
        <div style={styles.buttonContainer}>
          <button style={styles.deliveryButton}>Delivery</button>
          <button style={styles.pickupButton}>Pickup</button>
        </div>
        <input 
          type="text" 
          placeholder="Enter Your Address" 
          style={styles.addressInput} 
        />
        <button style={styles.findFoodButton}>Find Food</button>
      </div>

      {/* พื้นหลังสีขาวหลังจากกล่องข้อความ */}
      <div style={styles.whiteBackground}>
        {/* เมนู 4 รายการ */}
        <h2 style={styles.menuTitle}>Our Menu</h2>
        <div style={styles.menuItems}>
          {menuItems.map((item, index) => (
            <div key={index} style={styles.menuItem}>
              <img src={item.image} alt={item.name} style={styles.menuImage} />
              <h3 style={styles.menuItemTitle}>{item.name}</h3>
              <p style={styles.menuItemDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  bodyContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // ใช้ความสูงเต็มหน้าจอ
    backgroundColor: '#ff7043', // สีพื้นหลังเป็นสีส้ม
    padding: '20px',
  },
  mainText: {
    fontSize: '50px',  // ขนาดตัวอักษรใหญ่
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: '10px',
  },
  subText: {
    fontSize: '20px',
    color: '#333',
    textAlign: 'center',
    marginBottom: '20px',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '4px',
    width: '100%',
    maxWidth: '500px',
    padding: '20px',
    boxSizing: 'border-box', // เพื่อให้ padding ไม่ทำให้กล่องยาวเกิน
    minWidth: '300px', // เพิ่มขนาดขั้นต่ำให้กล่อง
  },
  addressInput: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
    width: '100%',
    marginBottom: '10px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    gap: '10px',
    marginBottom: '10px',
  },
  deliveryButton: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    flex: 1,
  },
  pickupButton: {
    padding: '10px 20px',
    backgroundColor: '#ffc107',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    flex: 1,
  },
  findFoodButton: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
  },
  whiteBackground: {
    backgroundColor: '#fff',
    padding: '20px',
    width: '100%',
    marginTop: '20px', // ระยะห่างระหว่างกล่อง
    boxSizing: 'border-box',
  },
  menuTitle: {
    fontSize: '30px',
    color: '#333',
    textAlign: 'center',
    marginBottom: '20px',
  },
  menuItems: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  menuItem: {
    width: '220px',
    padding: '10px',
    textAlign: 'center',
    border: '1px solid #ccc',
    borderRadius: '8px',
    margin: '10px',
  },
  menuImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  menuItemTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  menuItemDescription: {
    fontSize: '16px',
    color: '#555',
  },
};

export default Home;
