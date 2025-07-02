import React, { useEffect, useState } from "react";
import { Card, Image, Row, Col, Button } from "antd";
import { HeartFilled } from '@ant-design/icons';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((apiData) => setData(apiData.products));
  }, []);
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ffe0f7 0%, #e0f7fa 100%)",
        padding: "40px 8px",
        fontFamily: "'Quicksand', 'Mali', 'Segoe UI', 'Roboto', 'sans-serif'"
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: 36,
          color: "#ff69b4",
          fontWeight: 900,
          letterSpacing: 2,
          fontSize: 38,
          textShadow: "0 2px 12px #ffd6e7",
          fontFamily: "'Mali', 'Quicksand', 'Segoe UI', 'Roboto', 'sans-serif'"
        }}
      >
        🧸 API DATA 🧸
      </h1>
      <Row gutter={[28, 28]} justify="center">
        {data &&
          data.map((item, index) => (
            <Col
              xs={24}
              sm={12}
              md={8}
              lg={6}
              key={index}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                title={
                  <span style={{ fontWeight: 700, color: "#ff69b4", fontSize: 18, fontFamily: "'Quicksand', 'Mali', 'sans-serif'" }}>
                    {item.title} <span role="img" aria-label="sparkle">✨</span>
                  </span>
                }
                hoverable
                style={{
                  width: 290,
                  borderRadius: 32,
                  boxShadow: "0 8px 32px rgba(255,182,193,0.18)",
                  overflow: "hidden",
                  background: "rgba(255,255,255,0.98)",
                  border: "2px solid #ffe0f7",
                  transition: "transform 0.2s, box-shadow 0.2s"
                }}
                bodyStyle={{ padding: 18 }}
                cover={
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    style={{
                      height: 180,
                      objectFit: "cover",
                      borderRadius: "32px 32px 0 0",
                      borderBottom: "2px solid #ffe0f7",
                      background: "#fff0f6"
                    }}
                    preview={false}
                  />
                }
              >
                <p style={{ minHeight: 44, color: "#a471a8", fontSize: 15, marginBottom: 12, fontFamily: "'Quicksand', 'Mali', 'sans-serif'" }}>
                  {item.description}
                </p>
                <p style={{ fontWeight: 700, color: "#ffb347", fontSize: 18, marginBottom: 18, fontFamily: "'Quicksand', 'Mali', 'sans-serif'" }}>
                  💸 Price: ${item.price}
                </p>
                <Button
                  type="primary"
                  icon={<HeartFilled style={{ color: '#fff0f6' }} />}
                  style={{
                    background: "linear-gradient(90deg, #ffb6c1 0%, #b4e9fa 100%)",
                    border: "none",
                    borderRadius: 20,
                    fontWeight: 700,
                    fontSize: 15,
                    color: "#fff",
                    boxShadow: "0 2px 8px #ffd6e7",
                    transition: "background 0.2s, box-shadow 0.2s",
                    padding: "0 18px"
                  }}
                  size="large"
                >
                  น่ารักจังเลย
                </Button>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
}

export default App;
