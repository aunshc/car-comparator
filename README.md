# Car Comparator Webapp

A modern, responsive web application for comparing cars side by side. Built with HTML, CSS, and JavaScript, featuring a beautiful UI and comprehensive car comparison functionality.
<img width="1493" height="770" alt="Screenshot 2025-08-09 at 12 23 12 PM" src="https://github.com/user-attachments/assets/1035d572-33b0-4261-8c37-9b8f1fc0dc05" />



## Features

### 🚗 **Car Comparison**
- Compare two cars side by side
- Detailed specifications for each car
- Visual comparison with winner/loser indicators
- Easy car selection and removal

### 📊 **Comprehensive Metrics**
- **Price**: Cost comparison with currency formatting
- **Range**: Driving range in miles
- **Acceleration**: 0-60 mph time in seconds
- **Top Speed**: Maximum speed in mph
- **Power**: Horsepower output
- **Efficiency**: Fuel consumption in L/100km

### 🔍 **Advanced Filtering**
- Search cars by name
- Filter by category:
  - Sedan
  - SUV
  - Sports
  - Electric
- Real-time search and filtering

### 🎨 **Modern Design**
- Responsive design that works on all devices
- Beautiful gradient backgrounds
- Smooth animations and transitions
- Modern card-based layout
- Interactive hover effects

### 📱 **Mobile Friendly**
- Fully responsive design
- Touch-friendly interface
- Optimized for mobile devices

## How to Use

1. **Open the Application**
   - Simply open `index.html` in your web browser
   - No server setup required - it's a static web application

2. **Select Cars to Compare**
   - Click "Add Car" on either Car 1 or Car 2
   - Browse through the available cars in the modal
   - Use search and filters to find specific cars
   - Click on a car to select it

3. **View Comparison Results**
   - Once both cars are selected, comparison results appear automatically
   - Green values indicate the winner for each metric
   - Red values indicate the loser
   - Ties are shown when values are equal

4. **Remove Cars**
   - Click the "Remove" button on any car card to clear it
   - Comparison results will hide when one car is removed

## Car Database

The application includes 12 popular cars across different categories:

### Electric Cars
- Tesla Model 3
- Tesla Model Y
- Nissan Leaf

### Sedans
- BMW 3 Series
- Mercedes C-Class
- Audi A4

### Sports Cars
- Porsche 911
- Ferrari F8
- Lamborghini Huracán

### SUVs
- BMW X5
- Mercedes GLE
- Range Rover Sport

## Technical Details

### File Structure
```
car-comparator/
├── index.html      # Main HTML file
├── style.css       # CSS styles and responsive design
├── script.js       # JavaScript functionality
└── README.md       # This documentation
```

### Technologies Used
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Inter font family
- **Unsplash**: Car images

### Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Customization

### Adding New Cars
To add new cars, edit the `carsData` array in `script.js`:

```javascript
{
    id: 13,
    name: "Your Car Name",
    category: "sedan", // or "suv", "sports", "electric"
    price: 50000,
    range: 400,
    acceleration: 6.0,
    topSpeed: 155,
    power: 250,
    efficiency: 7.0,
    image: "https://your-image-url.com/car.jpg"
}
```

### Styling Customization
- Modify `style.css` to change colors, fonts, and layout
- Update the gradient backgrounds in the CSS variables
- Adjust responsive breakpoints for different screen sizes

### Adding New Metrics
To add new comparison metrics, update the `metrics` array in the `showComparisonResults()` function in `script.js`.

## Performance

- Lightweight and fast loading
- No external dependencies (except CDN resources)
- Optimized images and assets
- Efficient JavaScript algorithms

## Future Enhancements

Potential features for future versions:
- Save comparison history
- Export comparison results
- More detailed specifications
- User reviews and ratings
- Price history tracking
- Dealer information
- Test drive booking

## License

This project is open source and available under the MIT License.

---

**Enjoy comparing cars! 🚗💨** 
