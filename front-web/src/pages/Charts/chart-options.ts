export const pieOptions = {
    chart: {
      background: "transparent",
      foreColor: "red",
    },
    colors: ["#dd2400", "#002366", "#0E7A0D", "#ffd6a5"],
    legend: {
      show: false,
    },
    tooltip: {
      enabled: true,
    },
    dataLabels: {
      enabled: true,
      offsetX: "100px",
      offsetY: "100px",
      style: {
        colors: ["#dd2400", "#002366", "#0E7A0D", "#ffd6a5"],
        fontSize: "20px",
        fontFamily: "Play, sans-serif",
        fontWeight: 700,
      },
    },
    plotOptions: {
      pie: {
        customScale: 0.7,
        expandOnClick: false,
        dataLabels: {
          offset: 60,
        },
      },
    },
  };

  export const pieOptions2 = {
    chart: {
      background: "transparent",
      foreColor: "red",
    },
    colors: ["#dd2400", "#4c51f7", "#b45e33", "#ffd6a5"],
    legend: {
      show: false,
    },
    tooltip: {
      enabled: true,
    },
    dataLabels: {
      enabled: true,
      offsetX: "100px",
      offsetY: "100px",
      style: {
        colors: ["#dd2400", "#4c51f7", "#b45e33", "#ffd6a5"],
        fontSize: "20px",
        fontFamily: "Play, sans-serif",
        fontWeight: 700,
      },
    },
    plotOptions: {
      pie: {
        customScale: 0.7,
        expandOnClick: false,
        dataLabels: {
          offset: 60,
        },
      },
    },
  };
  
  export const barOptions = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: ["#a8dadc"],
    grid: {
      show: false,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        endingShape: "rounded",
        startingShape: "rounded",
        barHeight: "60px",
      },
    },
    dataLabels: {
      enabled: true,
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: [
      {
        labels: {
          maxWidth: 360,
          style: {
            colors: "#00D4FF",
            fontSize: "18px",
            fontFamily: "Play, sans-serif",
            fontWeight: 700,
          },
        },
      },
    ],
  };