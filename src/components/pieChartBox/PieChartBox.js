import React from "react";
import './pieChartBox.scss'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const PieChartBox = (props) => {
  return (
    <div className="pieChart">
      <h1>Leads by Source</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={props?.data}
              innerRadius={'70%'}
              outerRadius={'90%'}
              paddingAngle={5}
              dataKey="value"
            >
              {props?.data?.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {props?.data?.map((item) => (
          <div className="main">
            <div className="title">
              <div className="dot" style={{background:item.color}} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
