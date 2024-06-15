// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Features from './components/Features';
import FeatureList from './components/FeatureList';
import './App.css';
import { ThemeProvider } from './components/ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const theme = {
  primaryColor: '#e0f7fa',
  secondaryColor: '#ffe0b2',
};

const features1 = [
  {
    type: 'image',
    title: "功能多样化",
    description: "新煮意集成了饮食日记、健康计划和智能助理功能",
    image: "/images/feature1.png",
    imageWidth: "90%",
    customStyles: { backgroundColor: theme.primaryColor, height: "700px" }
  },
  {
    type: 'image',
    title: "饮食模式调整",
    description: "应用帮助用户识别和调整饮食模式，促进健康饮食习惯",
    image: "/images/feature2.png",
    imageWidth: "70%",
    customStyles: { backgroundColor: theme.primaryColor, height: "700px" }
  },
  {
    type: 'image',
    title: "详细记录",
    description: "用户可以通过饮食日记详细记录和分析每餐的能量和营养摄入",
    image: "/images/feature5.png",
    imageWidth: "70%",
    customStyles: { backgroundColor: theme.primaryColor, height: "700px" }
  }
];

const features2 = [
  {
    type: 'image',
    title: "健康计划管理",
    description: "用户可以通过健康计划记录每日热量和营养成分摄入情况",
    image: "/images/feature3.png",
    imageWidth: "80%",
    customStyles: { backgroundColor: "#ffecb3", height: "650px" }
  },
  {
    type: 'image',
    title: "即时知识获取",
    description: "基于AIGC大模型，为用户提供知识获取、菜肴推荐、食谱规划和饮食及运动建议",
    image: "/images/feature4.png",
    imageWidth: "80%",
    customStyles: { backgroundColor: "#c8e6c9", height: "750px" }
  }
];

const features3 = [
  {
    type: 'video',
    title: "简单、个性、健康，就在新煮意",
    description: "新煮意是一款集饮食日记、健康计划和智能助理功能于一体的个人健康管理应用程序",
    video: "/videos/feature1.mp4",
    customStyles: { backgroundColor: "#ffecb3", height: "650px" }
  }
];

const featureWidths1 = [
  { lg: 4, md: 6, sm: 12 }, // 33.33% on large screens, 50% on medium screens, 100% on small screens
  { lg: 4, md: 6, sm: 12 },
  { lg: 4, md: 6, sm: 12 }
];

const featureWidths2 = [
  { lg: 8, md: 8, sm: 12 }, // 66.67% on large and medium screens, 100% on small screens
  { lg: 4, md: 4, sm: 12 }
];

const featureWidths3 = [
  { lg: 12, md: 12, sm: 12 }
];

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
        </Routes>
        <ThemeProvider theme={theme}>
          <div className="App">
            <FeatureList features={features3} featureWidths={featureWidths3} />
            <FeatureList features={features1} featureWidths={featureWidths1} />
            <FeatureList features={features2} featureWidths={featureWidths2} />
          </div>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;