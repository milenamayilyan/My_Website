document.addEventListener("DOMContentLoaded", () => {
  // Full sample data
  const data = [
  {"temperature":24.03,"pressure":904.09,"humidity":29.74,"altitude":951.22,"co2ppm":853,"tvoc_index":1,"timestamp":"2025-12-05T12:05:27.450820"},
  {"temperature":24.03,"pressure":904.13,"humidity":30.78,"altitude":950.89,"co2ppm":857,"tvoc_index":1,"timestamp":"2025-12-05T12:05:34.096612"},
  {"temperature":24.01,"pressure":904.13,"humidity":29.84,"altitude":950.91,"co2ppm":894,"tvoc_index":1,"timestamp":"2025-12-05T12:05:40.923010"},
  {"temperature":23.97,"pressure":904.14,"humidity":29.54,"altitude":950.96,"co2ppm":923,"tvoc_index":1,"timestamp":"2025-12-05T12:05:47.294906"},
  {"temperature":24.04,"pressure":904.08,"humidity":29.9,"altitude":951.39,"co2ppm":930,"tvoc_index":1,"timestamp":"2025-12-05T12:05:54.358318"},
  {"temperature":24.14,"pressure":904.1,"humidity":31.33,"altitude":951.16,"co2ppm":948,"tvoc_index":1,"timestamp":"2025-12-05T12:06:01.084073"},
  {"temperature":24.17,"pressure":904.11,"humidity":29.43,"altitude":951.04,"co2ppm":1028,"tvoc_index":1,"timestamp":"2025-12-05T12:06:07.539089"},
  {"temperature":24.18,"pressure":904.13,"humidity":29.3,"altitude":950.91,"co2ppm":1019,"tvoc_index":1,"timestamp":"2025-12-05T12:06:14.350436"},
  {"temperature":24.19,"pressure":904.13,"humidity":29.24,"altitude":950.93,"co2ppm":995,"tvoc_index":1,"timestamp":"2025-12-05T12:06:21.449217"},
  {"temperature":24.19,"pressure":904.15,"humidity":29.2,"altitude":950.71,"co2ppm":955,"tvoc_index":1,"timestamp":"2025-12-05T12:06:27.805606"},
  {"temperature":24.27,"pressure":904.09,"humidity":33.08,"altitude":951.24,"co2ppm":908,"tvoc_index":3,"timestamp":"2025-12-05T12:06:34.318067"},
  {"temperature":24.8,"pressure":904.16,"humidity":33.3,"altitude":950.63,"co2ppm":963,"tvoc_index":26,"timestamp":"2025-12-05T12:06:41.420116"},
  {"temperature":24.85,"pressure":904.14,"humidity":32.5,"altitude":950.83,"co2ppm":1092,"tvoc_index":27,"timestamp":"2025-12-05T12:06:49.121960"},
  {"temperature":25.06,"pressure":904.18,"humidity":41.71,"altitude":950.44,"co2ppm":1429,"tvoc_index":40,"timestamp":"2025-12-05T12:06:57.295911"},
  {"temperature":25.37,"pressure":904.17,"humidity":33.32,"altitude":950.56,"co2ppm":1441,"tvoc_index":62,"timestamp":"2025-12-05T12:07:04.154649"},
  {"temperature":25.58,"pressure":904.15,"humidity":31.45,"altitude":950.72,"co2ppm":1482,"tvoc_index":81,"timestamp":"2025-12-05T12:07:10.829653"},
  {"temperature":25.61,"pressure":904.06,"humidity":35.43,"altitude":951.52,"co2ppm":1437,"tvoc_index":99,"timestamp":"2025-12-05T12:07:18.608442"},
  {"temperature":25.68,"pressure":904.1,"humidity":33.83,"altitude":951.17,"co2ppm":1290,"tvoc_index":107,"timestamp":"2025-12-05T12:07:25.777367"},
  {"temperature":25.93,"pressure":904.23,"humidity":31.73,"altitude":950.02,"co2ppm":1197,"tvoc_index":125,"timestamp":"2025-12-05T12:07:32.554436"},
  {"temperature":26.08,"pressure":904.22,"humidity":34.37,"altitude":950.11,"co2ppm":1219,"tvoc_index":143,"timestamp":"2025-12-05T12:07:40.293886"}
  ];

  const labels = data.map(d => d.timestamp.slice(11,19));
  const tvocData = data.map(d => d.tvoc_index);

  const ctx = document.getElementById('tvocChart').getContext('2d');
  const gradient = ctx.createLinearGradient(0,0,0,400);
  gradient.addColorStop(0, '#1a3c5a88');
  gradient.addColorStop(1, '#1a3c5a11');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,   // now only HH:MM:SS
      datasets: [{
        label: 'TVOC Index',
        data: tvocData,
        borderColor: '#1a3c5a',
        backgroundColor: gradient,
        fill: true,
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true, position: 'top', labels: { color: '#1a3c5a' } },
        tooltip: { backgroundColor:'#1a3c5a', titleColor:'#fff', bodyColor:'#fff' }
      },
      scales: {
        x: { title: { display:true, text:'Time (HH:MM:SS)', color:'#1a3c5a' }, ticks:{ color:'#1a3c5a' } },
        y: { title: { display:true, text:'TVOC Index', color:'#1a3c5a' }, ticks:{ color:'#1a3c5a' } }
      }
    }
  });
});
