function init() {
  var map = L.map(document.getElementById('trafficmap')).setView([40.784769, -73.966427], 10);

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
  }).addTo(map);

  // create a red polyline from an array of LatLng points
  var latlngs = [
    [40.75829,-73.997531],
    [40.7605,-74.0032],
    [40.7620605,-74.007021],
    [40.7604506,-74.003221],
    [40.762021,-74.00705],
    [40.76621,-74.01712],
    [40.5264504,-74.27001],
    [40.52568,-74.267851],
    [40.52528,-74.26585],
    [40.52492,-74.26286],
    [40.5246206,-74.260011],
    [40.5243004,-74.25713],
    [40.52432,-74.254681],
    [40.5243904,-74.253171],
    [40.5245704,-74.25105],
    [40.5256,-74.243941],
    [40.52514,-74.24127],
    [40.5253105,-74.237981],
    [40.6309004,-74.14569],
    [40.63259,-74.145531],
    [40.6343505,-74.145131],
    [40.6352905,-74.144911],
    [40.6395205,-74.143161],
    [40.64452,-74.141111],
    [40.64672,-74.140171],
    [40.6474905,-74.13978],
    [40.65243,-74.136261],
    [40.6532706,-74.13549],
    [40.65375,-74.13476],
    [40.654011,-74.134041],
    [40.75719,-73.99724],
    [40.76017,-74.00382],
    [40.76185,-74.00725],
    [40.76608,-74.01726],
    [40.75766,-73.99687],
    [40.7604,-74.00328],
    [40.76197,-74.0071],
    [40.76615,-74.01717],
    [40.78802,-73.79003],
    [40.7868604,-73.78838],
    [40.7863506,-73.787771],
    [40.7854504,-73.786831],
    [40.78502,-73.786481],
    [40.7848004,-73.78632],
    [40.7844005,-73.78601],
    [40.7837704,-73.785671],
    [40.7831705,-73.78538],
    [40.78264,-73.7852],
    [40.7817,-73.78497],
    [40.78116,-73.78489],
    [40.78819,-73.79052],
    [40.7887906,-73.78895],
    [40.7891204,-73.78771],
    [40.7894104,-73.78573],
    [40.7894805,-73.78448],
    [40.7894104,-73.78255],
    [40.789241,-73.78116],
    [40.78896,-73.77992],
    [40.7885405,-73.77866],
    [40.7880904,-73.777661],
    [40.78754,-73.77664],
    [40.7870405,-73.77592],
    [40.7442206,-73.771661],
    [40.7454306,-73.76907],
    [40.745701,-73.76831],
    [40.7465005,-73.7654],
    [40.7476404,-73.76128],
    [40.7480905,-73.76008],
    [40.7488704,-73.75842],
    [40.7492,-73.757551],
    [40.74947,-73.75658],
    [40.75032,-73.75319],
    [40.7506906,-73.75108],
    [40.7508404,-73.75023],
    [40.78795,-73.790191],
    [40.78647,-73.78812],
    [40.7862104,-73.787781],
    [40.78587,-73.787381],
    [40.7854106,-73.786931],
    [40.7846506,-73.786261],
    [40.7843806,-73.786071],
    [40.78327,-73.78547],
    [40.78266,-73.785271],
    [40.7795604,-73.78463],
    [40.77606,-73.78439],
    [40.77373,-73.78426],
    [40.7537504,-73.744391],
    [40.75605,-73.740851],
    [40.7576705,-73.738391],
    [40.7591904,-73.735841],
    [40.7596604,-73.734851],
    [40.75999,-73.73388],
    [40.7607206,-73.73196],
    [40.76113,-73.731051],
    [40.76178,-73.72999],
    [40.76274,-73.72851],
    [40.7633104,-73.727421],
    [40.7638,-73.72609],
    [40.7889706,-73.790541],
    [40.7889404,-73.789571],
    [40.78923,-73.78775],
    [40.78958,-73.78552],
    [40.7896406,-73.78466],
    [40.78952,-73.7821],
    [40.7893705,-73.78109],
    [40.78911,-73.77983],
    [40.7886504,-73.778501],
    [40.78822,-73.77755],
    [40.78766,-73.776491],
    [40.7871504,-73.77579],
    [40.79782,-73.79339],
    [40.793425,-73.79344],
    [40.792794,-73.79337001],
    [40.79086,-73.79276],
    [40.79086,-73.79276],
    [40.7901,-73.79252001],
    [40.788326,-73.79229001],
    [40.788055,-73.79212001],
    [40.78792001,-73.79197],
    [40.78779,-73.79155],
    [40.78775,-73.79135001],
    [40.72966,-73.87775],
    [40.730165,-73.87643],
    [40.7304,-73.87567],
    [40.73241,-73.86913001],
    [40.734285,-73.86321001],
    [40.735045,-73.86054],
    [40.73563,-73.85867],
    [40.736584,-73.85531],
    [40.736944,-73.85327001],
    [40.737285,-73.85184001],
    [40.80069,-73.92878],
    [40.8013005,-73.930181],
    [40.8014104,-73.93057],
    [40.80143,-73.93084],
    [40.80133,-73.93106],
    [40.8011404,-73.931261],
    [40.80084,-73.931271],
    [40.8006704,-73.93115],
    [40.8005206,-73.930951],
    [40.8001805,-73.930151],
    [40.8705,-73.929931],
    [40.7998905,-73.92972],
    [40.8011005,-73.92846],
    [40.80151,-73.93066],
    [40.8014,-73.93111],
    [40.8012304,-73.93129],
    [40.80096,-73.93141],
    [40.8007405,-73.93133],
    [40.800501,-73.93106],
    [40.80026,-73.93057],
    [40.7997606,-73.92972],
    [40.7994205,-73.929511],
    [40.79901,-73.92945],
    [40.79771,-73.929341],
    [40.7723,-73.91983],
    [40.7738304,-73.92197],
    [40.77443,-73.92261],
    [40.77546,-73.92346],
    [40.7783806,-73.925631],
    [40.78103,-73.927631],
    [40.78363,-73.929611],
    [40.784271,-73.92989],
    [40.7851,-73.929971],
    [40.7858105,-73.929841],
    [40.78629,-73.929601],
    [40.786801,-73.92923],
    [40.77223,-73.919941],
    [40.77367,-73.92198],
    [40.7744206,-73.92278],
    [40.77714,-73.924911],
    [40.781071,-73.92788],
    [40.78311,-73.929421],
    [40.7837106,-73.929871],
    [40.7842205,-73.93008],
    [40.78477,-73.93017],
    [40.78549,-73.93011],
    [40.78604,-73.92991],
    [40.78665,-73.92953],
    [40.78972,-73.926],
    [40.772251,-73.919891],
    [40.77391,-73.9222],
    [40.77474,-73.92301],
    [40.77647,-73.92431],
    [40.7783606,-73.925761],
    [40.7810205,-73.92776],
    [40.78372,-73.92982],
    [40.7842205,-73.93002],
    [40.78477,-73.93011],
    [40.78549,-73.930051],
    [40.7860304,-73.92985],
    [40.7866206,-73.929511],
    [40.79789,-73.91988],
    [40.79771,-73.92004],
    [40.79758,-73.92022],
    [40.7974704,-73.92059],
    [40.797501,-73.92109],
    [40.79766,-73.92165],
    [40.79811,-73.922631],
    [40.79834,-73.922991],
    [40.79872,-73.92381],
    [40.799091,-73.924681],
    [40.7993305,-73.92524],
    [40.7999805,-73.926881],
    [40.77223,-73.919941],
    [40.77367,-73.92198],
    [40.7744206,-73.92278],
    [40.77714,-73.924911],
    [40.781071,-73.92788],
    [40.78311,-73.929421],
    [40.7837106,-73.929871],
    [40.7842205,-73.93008],
    [40.78477,-73.93017],
    [40.78549,-73.93011],
    [40.78604,-73.92991],
    [40.78665,-73.92953],
    [40.789536,-73.78631],
    [40.7894,-73.78765],
    [40.788976,-73.78955],
    [40.78896,-73.79011001],
    [40.789124,-73.79086001],
    [40.78927,-73.79118001],
    [40.789536,-73.79157001],
    [40.78996,-73.79196],
    [40.790714,-73.79246],
    [40.790714,-73.79246],
    [40.7911,-73.79267],
    [40.791976,-73.793],
    [40.7262006,-74.01112],
    [40.7252805,-74.01128],
    [40.7218105,-74.011981],
    [40.7195505,-74.012471],
    [40.71654,-74.013231],
    [40.714451,-74.01376],
    [40.71251,-74.01429],
    [40.7108405,-74.014721],
    [40.7086904,-74.01542],
    [40.7079305,-74.01572],
    [40.7072,-74.01598],
    [40.814761,-73.83668],
    [40.81354,-73.83659],
    [40.8130504,-73.8365],
    [40.8124505,-73.83638],
    [40.8118404,-73.836121],
    [40.8111,-73.83562],
    [40.8049306,-73.831821],
    [40.79925,-73.828251],
    [40.79932,-73.82809],
    [40.8006,-73.82895],
    [40.8047004,-73.83146],
    [40.8114405,-73.83571],
    [40.8120204,-73.836031],
    [40.8124904,-73.836211],
    [40.8128505,-73.836261],
    [40.8148205,-73.83629],
    [40.8251205,-73.83637],
    [40.82442,-73.83629],
    [40.82285,-73.836221],
    [40.8214506,-73.836211],
    [40.8189206,-73.83636],
    [40.81526,-73.83669],
    [40.81479,-73.83668],
    [40.7712605,-73.833311],
    [40.7727804,-73.83087],
    [40.77333,-73.83015],
    [40.7742104,-73.829271],
    [40.77584,-73.82814],
    [40.77868,-73.82651],
    [40.78087,-73.82537],
    [40.7818904,-73.824941],
    [40.78298,-73.824621],
    [40.7870604,-73.82379],
    [40.7881605,-73.82321],
    [40.78889,-73.822701],
    [40.68036,-74.00441001],
    [40.6822,-74.0057201],
    [40.6837,-74.006440],
    [40.68563,-74.00757],
    [40.6941205,-74.01288001],
    [40.7002801,-74.01529001],
    [40.70121,-74.0156],
    [40.703434,-74.0156101],
    [40.70499,-74.01519],
    [40.70609,-74.01468],
    [40.70631,-74.01501],
    [40.705380,-74.01528],
    [40.70496,-74.01546],
    [40.70374,-74.01574001],
    [40.70304,-74.01582],
    [40.70126,-74.01574],
    [40.70026,-74.01541],
    [40.69408,-74.01304],
    [40.68556,-74.00779],
    [40.68363,-74.00668],
    [40.68213,-74.00602],
    [40.681160,-74.005320],
    [40.6798,-74.00416],
    [40.797815,-73.79321],
    [40.80218,-73.79324001],
    [40.807614,-73.79345],
    [40.809816,-73.79345],
    [40.811155,-73.79365],
    [40.81224,-73.79403],
    [40.813344,-73.79468],
    [40.81418,-73.79534001],
    [40.814734,-73.79586],
    [40.81535,-73.79655001],
    [40.816125,-73.79772001],
    [40.81662,-73.79872],
    [40.81763,-73.80362001],
    [40.817516,-73.80261],
    [40.817226,-73.80083],
    [40.81692,-73.79984],
    [40.81633,-73.79839001],
    [40.815835,-73.79751],
    [40.815185,-73.79659001],
    [40.81439,-73.79573],
    [40.81353,-73.79503001],
    [40.81242,-73.79433],
    [40.81186,-73.79407],
    [40.81112,-73.79382001],
    [40.741534,-73.95406001],
    [40.7415,-73.95491001],
    [40.742526,-73.95976],
    [40.743125,-73.96152001],
    [40.745436,-73.96631001],
    [40.746234,-73.96946001],
    [40.745835,-73.97259001],
    [40.74598,-73.97347],
    [40.746704,-73.97515],
    [40.745726,-73.97359],
    [40.745616,-73.97305],
    [40.745616,-73.97264001],
    [40.746054,-73.96949001],
    [40.74586,-73.96844],
    [40.745365,-73.96643],
    [40.74304,-73.96157001],
    [40.74244,-73.95983001],
    [40.742185,-73.95887],
    [40.74143,-73.95491001],
    [40.74136,-73.95378001],
    [40.61052,-74.09769],
    [40.610561,-74.09586],
    [40.6102405,-74.093881],
    [40.60983,-74.09251],
    [40.60698,-74.08574],
    [40.6065004,-74.083851],
    [40.60616,-74.081781],
    [40.60596,-74.076011],
    [40.6054704,-74.073421],
    [40.60389,-74.06922],
    [40.61052,-74.09769],
    [40.6101,-74.10893],
    [40.61028,-74.1105],
    [40.6110705,-74.115671],
    [40.61079,-74.11726],
    [40.60938,-74.12241],
    [40.6084306,-74.127401],
    [40.60804,-74.13212],
    [40.608031,-74.13212],
    [40.60759,-74.1409],
    [40.61486,-74.15738],
    [40.60931,-74.15012],
    [40.60846,-74.14847],
    [40.6079,-74.146831],
    [40.60764,-74.14555],
    [40.6074906,-74.14404],
    [40.60757,-74.1409],
    [40.63092,-74.14592],
    [40.62975,-74.14593],
    [40.62877,-74.14579],
    [40.6279506,-74.145671],
    [40.62713,-74.145681],
    [40.62637,-74.14586],
    [40.6254205,-74.14618],
    [40.6247506,-74.146381],
    [40.6241006,-74.146661],
    [40.6234004,-74.14704],
    [40.6226006,-74.147501],
    [40.6217506,-74.148181],
    [40.6210105,-74.168861],
    [40.6182105,-74.162381],
    [40.6154,-74.15806],
    [40.6149404,-74.15748],
    [40.62102,-74.168861],
    [40.6212304,-74.16992],
    [40.6212304,-74.170961],
    [40.6206306,-74.173561],
    [40.6197105,-74.175091],
    [40.6188605,-74.17597],
    [40.61693,-74.1773],
    [40.60685,-74.183361],
    [40.60437,-74.18531],
    [40.6020904,-74.187711],
    [40.60213,-74.187981],
    [40.60687,-74.183601],
    [40.6098,-74.181981],
    [40.6157705,-74.17837],
    [40.61719,-74.177821],
    [40.61921,-74.177141],
    [40.620791,-74.175571],
    [40.62154,-74.174191],
    [40.6218804,-74.17309],
    [40.6220405,-74.17158],
    [40.62189,-74.17091],
    [40.5900505,-74.19356],
    [40.59141,-74.19352],
    [40.59413,-74.19266],
    [40.5984005,-74.19099],
    [40.59978,-74.19014],
    [40.60139,-74.188741],
    [40.60213,-74.187981],
    [40.56058,-74.199581],
    [40.568141,-74.192011],
    [40.5700804,-74.190751],
    [40.571991,-74.19015],
    [40.5737105,-74.190041],
    [40.5751205,-74.19029],
    [40.5763306,-74.190571],
    [40.5777,-74.19088],
    [40.5899804,-74.19356],
    [40.56058,-74.199581],
    [40.55926,-74.20113],
    [40.5584906,-74.202351],
    [40.55789,-74.20363],
    [40.55738,-74.20496],
    [40.5561606,-74.209741],
    [40.5558905,-74.210551],
    [40.55516,-74.212471],
    [40.55443,-74.213991],
    [40.5529104,-74.21635],
    [40.55187,-74.21765],
    [40.52581,-74.23039],
    [40.52593,-74.228371],
    [40.52611,-74.22745],
    [40.52653,-74.226761],
    [40.5271204,-74.226401],
    [40.529101,-74.22574],
    [40.5309504,-74.22432],
    [40.53188,-74.22409],
    [40.536891,-74.22458],
    [40.5388504,-74.2245],
    [40.5418,-74.22405],
    [40.54379,-74.22338],
    [40.54589,-74.22241],
    [40.604181,-74.0523],
    [40.60376,-74.05356],
    [40.6034406,-74.05459],
    [40.6030806,-74.055681],
    [40.60224,-74.058241],
    [40.60199,-74.059121],
    [40.6018705,-74.060121],
    [40.60193,-74.060961],
    [40.60208,-74.06202],
    [40.60233,-74.0631],
    [40.60266,-74.064411],
    [40.6029005,-74.06534],
    [40.60425,-74.052321],
    [40.6038804,-74.053491],
    [40.6035506,-74.05455],
    [40.6032,-74.05562],
    [40.6023804,-74.05813],
    [40.60213,-74.059001],
    [40.6020306,-74.05992],
    [40.6020904,-74.06082],
    [40.6022704,-74.061781],
    [40.6025006,-74.06292],
    [40.6027906,-74.064231],
    [40.60296,-74.065301],
    [40.61072,-74.097911],
    [40.61075,-74.09627],
    [40.61061,-74.09465],
    [40.61021,-74.09299],
    [40.6096804,-74.09162],
    [40.6084106,-74.08862],
    [40.6072205,-74.08561],
    [40.6067904,-74.08435],
    [40.6064805,-74.082591],
    [40.60636,-74.0809],
    [40.6062606,-74.07679],
    [40.60607,-74.07518],
    [40.6077805,-74.14091],
    [40.60826,-74.132101],
    [40.6152105,-74.157401],
    [40.61231,-74.15362],
    [40.60952,-74.149961],
    [40.60882,-74.14878],
    [40.6083206,-74.147561],
    [40.6078705,-74.14574],
    [40.60772,-74.14416],
    [40.6077805,-74.14091],
    [40.63092,-74.14592],
    [40.62975,-74.14593],
    [40.62877,-74.14579],
    [40.6279506,-74.145671],
    [40.62713,-74.145681],
    [40.62637,-74.14586],
    [40.6254205,-74.14618],
    [40.6247506,-74.146381],
    [40.6241006,-74.146661],
    [40.6234004,-74.14704],
    [40.6226006,-74.147501],
    [40.6217506,-74.148181],
    [40.6151706,-74.15738],
    [40.61739,-74.16056],
    [40.6205405,-74.16683],
    [40.6209604,-74.16791],
    [40.6210504,-74.168191],
    [40.6211906,-74.16874],
    [40.6020904,-74.1877],
    [40.600331,-74.18943],
    [40.59783,-74.19099],
    [40.592071,-74.193131],
    [40.5907404,-74.19333],
    [40.5902,-74.19332],
    [40.5902,-74.19332],
    [40.57748,-74.19046],
    [40.57623,-74.190181],
    [40.5742005,-74.1898],
    [40.57251,-74.189821],
    [40.57162,-74.18998],
    [40.5703306,-74.190391],
    [40.56777,-74.192011],
    [40.5604,-74.19941],
    [40.56042,-74.199391],
    [40.55924,-74.20076],
    [40.5585105,-74.20184],
    [40.5579004,-74.203061],
    [40.5571906,-74.204851],
    [40.55606,-74.20935],
    [40.5557304,-74.210451],
    [40.55519,-74.21191],
    [40.554441,-74.21348],
    [40.55369,-74.214801],
    [40.552851,-74.216101],
    [40.5518206,-74.217341],
    [40.52561,-74.23039],
    [40.5258705,-74.22618],
    [40.5263604,-74.22336],
    [40.52734,-74.22338],
    [40.5371,-74.2243],
    [40.53931,-74.22418],
    [40.5407805,-74.223981],
    [40.54437,-74.22283],
    [40.5466005,-74.22172],
    [40.54831,-74.22059],
    [40.63089,-74.14569],
    [40.6298,-74.14569],
    [40.62883,-74.14556],
    [40.62805,-74.145451],
    [40.6272105,-74.14546],
    [40.62642,-74.1456],
    [40.6255106,-74.14595],
    [40.6247904,-74.14614],
    [40.6241404,-74.146441],
    [40.6234004,-74.146791],
    [40.6226205,-74.14725],
    [40.6217004,-74.147961],
    [40.6167105,-74.15242],
    [40.61572,-74.15276],
    [40.6148106,-74.152971],
    [40.6140506,-74.15282],
    [40.61301,-74.15227],
    [40.61034,-74.150871],
    [40.6096,-74.150101],
    [40.60817,-74.039261],
    [40.610091,-74.03337],
    [40.61059,-74.03176],
    [40.61121,-74.03028],
    [40.61171,-74.0296],
    [40.6129704,-74.028641],
    [40.6139,-74.027831],
    [40.6162006,-74.02602],
    [40.6082705,-74.039261],
    [40.610181,-74.03336],
    [40.6106706,-74.031781],
    [40.61137,-74.030251],
    [40.61178,-74.02968],
    [40.61307,-74.028731],
    [40.61404,-74.028011],
    [40.6162405,-74.02615],
    [40.6162405,-74.02612],
    [40.61923,-74.02361],
    [40.62362,-74.019831],
    [40.6248406,-74.019061],
    [40.62579,-74.01859],
    [40.6279004,-74.017721],
    [40.63049,-74.01676],
    [40.63239,-74.016061],
    [40.63336,-74.01586],
    [40.67643,-74.001241],
    [40.6772405,-74.001741],
    [40.6783605,-74.002531],
    [40.67925,-74.00331],
    [40.6795705,-74.00341],
    [40.68001,-74.00332],
    [40.6805806,-74.003031],
    [40.6814704,-74.0026],
    [40.6872004,-73.999811],
    [40.6892206,-73.99885],
    [40.7723304,-73.91979],
    [40.77384,-73.92192],
    [40.77445,-73.922581],
    [40.7754706,-73.923431],
    [40.7784005,-73.92561],
    [40.7810604,-73.927591],
    [40.7836405,-73.929571],
    [40.7843,-73.92986],
    [40.7851,-73.929921],
    [40.7858105,-73.929781],
    [40.78627,-73.92955],
    [40.78674,-73.92923],
    [40.61632,-74.0263],
    [40.61928,-74.02375],
    [40.6237206,-74.019951],
    [40.6248,-74.01925],
    [40.62583,-74.018741],
    [40.6279506,-74.017891],
    [40.63065,-74.01698],
    [40.63237,-74.016321],
    [40.6332305,-74.016151],
    [40.8859405,-73.89676],
    [40.88698,-73.89528],
    [40.8876205,-73.89407],
    [40.8884506,-73.89185],
    [40.8891906,-73.889041],
    [40.88976,-73.88773],
    [40.8907504,-73.886441],
    [40.8938205,-73.883351],
    [40.8966206,-73.88065],
    [40.8978505,-73.879821],
    [40.8992805,-73.879331],
    [40.90706,-73.87806],
    [40.6757405,-74.00126],
    [40.6765204,-74.0018],
    [40.67817,-74.003221],
    [40.67864,-74.003471],
    [40.67925,-74.0036],
    [40.6796,-74.00358],
    [40.68003,-74.003441],
    [40.6806205,-74.003161],
    [40.68153,-74.00273],
    [40.68726,-73.999951],
    [40.6892405,-73.99899],
    [40.68972,-73.9988],
    [40.71772,-73.94831],
    [40.71862,-73.946851],
    [40.72016,-73.94432],
    [40.721481,-73.942051],
    [40.7221204,-73.941121],
    [40.7226804,-73.94034],
    [40.72332,-73.93917],
    [40.72411,-73.93774],
    [40.72437,-73.937211],
    [40.7247205,-73.93591],
    [40.7254605,-73.933],
    [40.72574,-73.932121],
    [40.69153,-73.99911],
    [40.6922605,-73.99937],
    [40.6928906,-73.99937],
    [40.6933406,-73.99925],
    [40.69406,-73.99898],
    [40.695,-73.99853],
    [40.697371,-73.99741],
    [40.699431,-73.99642],
    [40.69977,-73.9962],
    [40.7001405,-73.99584],
    [40.7004504,-73.995421],
    [40.7007905,-73.994881],
    [40.7714206,-73.83345],
    [40.7702704,-73.8354],
    [40.76924,-73.836711],
    [40.7675005,-73.838271],
    [40.76592,-73.839261],
    [40.7654804,-73.83954],
    [40.7649004,-73.839841],
    [40.76456,-73.83995],
    [40.76418,-73.84001],
    [40.7633,-73.839941],
    [40.7626006,-73.839671],
    [40.7626006,-73.839671],
    [40.7613906,-73.83898],
    [40.7610504,-73.83887],
    [40.7605406,-73.83879],
    [40.76001,-73.838821],
    [40.75831,-73.83897],
    [40.75788,-73.83893],
    [40.75562,-73.83847],
    [40.75513,-73.83834],
    [40.75455,-73.83811],
    [40.7513,-73.835911],
    [40.75041,-73.8353],
    [40.7498406,-73.8350],
    [40.8240706,-73.874311],
    [40.8247,-73.86959],
    [40.8251906,-73.86596],
    [40.82536,-73.86426],
    [40.82587,-73.85961],
    [40.8266006,-73.85424],
    [40.8271806,-73.84994],
    [40.8271606,-73.84993],
    [40.82771,-73.84671],
    [40.8284105,-73.843471],
    [40.82869,-73.84133],
    [40.8287905,-73.8386],
    [40.8292,-73.835541],
    [40.82968,-73.834031],
    [40.8305,-73.83239],
    [40.83211,-73.82983],
    [40.83305,-73.82826],
    [40.83366,-73.82693],
    [40.8343006,-73.82571],
    [40.84064,-73.83831],
    [40.83881,-73.83853],
    [40.8346304,-73.83839],
    [40.83261,-73.83804],
    [40.83066,-73.837521],
    [40.8280704,-73.83668],
    [40.82495,-73.836211],
    [40.8563506,-73.87233],
    [40.85219,-73.871371],
    [40.85007,-73.87111],
    [40.8469404,-73.87115],
    [40.8459605,-73.871311],
    [40.8424005,-73.87202],
    [40.83961,-73.87273],
    [40.8362404,-73.87372],
    [40.8349506,-73.8739],
    [40.8333606,-73.873831],
    [40.8319705,-73.873681],
    [40.82985,-73.87313],
    [40.8347204,-73.86593],
    [40.83357,-73.86199],
    [40.8327305,-73.8592],
    [40.8312,-73.85409],
    [40.83017,-73.85069],
    [40.83015,-73.85071],
    [40.8301304,-73.850731],
    [40.8301105,-73.850731],
    [40.81376,-73.93128],
    [40.8127206,-73.9316],
    [40.8121104,-73.93169],
    [40.81148,-73.93161],
    [40.81091,-73.931261],
    [40.81044,-73.93079],
    [40.8082604,-73.927901],
    [40.80772,-73.9269],
    [40.80653,-73.923971],
    [40.80503,-73.92024],
    [40.8037906,-73.917471],
    [40.8036,-73.916931],
    [40.7279205,-73.83298],
    [40.7268904,-73.83239],
    [40.72639,-73.832001],
    [40.7257505,-73.83126],
    [40.724951,-73.830031],
    [40.724301,-73.829141],
    [40.7236905,-73.82848],
    [40.7229,-73.827801],
    [40.7209605,-73.826541],
    [40.7204005,-73.82634],
    [40.71958,-73.82621],
    [40.718861,-73.82634],
    [40.8242005,-73.874361],
    [40.8249804,-73.868411],
    [40.8254,-73.865281],
    [40.82591,-73.860311],
    [40.8266906,-73.854581],
    [40.8273104,-73.84998],
    [40.83037,-73.85062],
    [40.82996,-73.849251],
    [40.8294605,-73.847771],
    [40.8290406,-73.84645],
    [40.8288104,-73.84523],
    [40.8288104,-73.844191],
    [40.82898,-73.842891],
    [40.8298604,-73.838141],
    [40.83005,-73.836841],
    [40.83006,-73.83578],
    [40.8300205,-73.834511],
    [40.8300906,-73.833971],
    [40.8562805,-73.87254],
    [40.8521804,-73.871581],
    [40.8501706,-73.871451],
    [40.8483304,-73.871491],
    [40.8458506,-73.87152],
    [40.84239,-73.872261],
    [40.83964,-73.87291],
    [40.8363,-73.8739],
    [40.8349506,-73.87408],
    [40.83339,-73.87407],
    [40.8319705,-73.873921],
    [40.8298404,-73.873331],
    [40.8304204,-73.850811],
    [40.83156,-73.854671],
    [40.83238,-73.857341],
    [40.83312,-73.859891],
    [40.83335,-73.86046],
    [40.83352,-73.86113],
    [40.8337406,-73.862011],
    [40.83415,-73.86333],
    [40.8345205,-73.86458],
    [40.8350406,-73.866311],
    [40.7024204,-73.816481],
    [40.700841,-73.815751],
    [40.69726,-73.81382],
    [40.6959105,-73.812981],
    [40.68863,-73.808861],
    [40.6775105,-73.803261],
    [40.67445,-73.80181],
    [40.67445,-73.80181],
    [40.67374,-73.80154],
    [40.6726106,-73.801301],
    [40.6708206,-73.80123],
    [40.66752,-73.801481],
    [40.66479,-73.802321],
    [40.66407,-73.802511],
    [40.6633405,-73.80229],
    [40.6627104,-73.80149],
    [40.66255,-73.800541],
    [40.6627104,-73.799771],
    [40.6631406,-73.799051],
    [40.5256,-74.23039],
    [40.52551,-74.23214],
    [40.52539,-74.23344],
    [40.52526,-74.23765],
    [40.52493,-74.24395],
    [40.5247,-74.24803],
    [40.52455,-74.25073],
    [40.5243,-74.25314],
    [40.52419,-74.25536],
    [40.52419,-74.25623],
    [40.52458,-74.26033],
    [40.52477,-74.2621],
    [40.52528,-74.26624],
    [40.65632,-74.11972],
    [40.655041,-74.12241],
    [40.6544106,-74.124361],
    [40.6541206,-74.125881],
    [40.654011,-74.127141],
    [40.65429,-74.13302],
    [40.6542505,-74.133981],
    [40.65404,-74.134611],
    [40.6535805,-74.135461],
    [40.6533,-74.135771],
    [40.64786,-74.13964],
    [40.64705,-74.140071],
    [40.8302204,-73.850641],
    [40.8295305,-73.848401],
    [40.8291004,-73.847491],
    [40.82836,-73.8459],
    [40.8281405,-73.84524],
    [40.8280305,-73.844641],
    [40.827991,-73.843911],
    [40.82804,-73.842981],
    [40.8281906,-73.841761],
    [40.8286304,-73.83844],
    [40.82887,-73.83673],
    [40.8291904,-73.83548],
    [40.7278806,-73.832761],
    [40.7270705,-73.83231],
    [40.7265105,-73.831911],
    [40.72603,-73.8314],
    [40.724771,-73.829501],
    [40.72428,-73.82886],
    [40.72379,-73.828341],
    [40.72326,-73.827851],
    [40.7224605,-73.82729],
    [40.721951,-73.82696],
    [40.7215205,-73.826681],
    [40.7209605,-73.826371],
    [40.7624804,-73.839391],
    [40.76191,-73.839121],
    [40.76153,-73.83892],
    [40.76122,-73.83879],
    [40.7609604,-73.838721],
    [40.76061,-73.838681],
    [40.76024,-73.83869],
    [40.7587705,-73.83884],
    [40.75845,-73.838811],
    [40.7581404,-73.838771],
    [40.7558805,-73.838371],
    [40.75522,-73.8382],
    [40.77125,-73.833351],
    [40.77065,-73.834421],
    [40.77006,-73.8354],
    [40.769341,-73.83641],
    [40.76874,-73.836931],
    [40.7679705,-73.837601],
    [40.7672504,-73.83798],
    [40.7659105,-73.83889],
    [40.76558,-73.839031],
    [40.7650104,-73.83937],
    [40.7646304,-73.83955],
    [40.764281,-73.83965],
    [40.81477,-73.83629],
    [40.81611,-73.83627],
    [40.8178404,-73.83601],
    [40.8202405,-73.83589],
    [40.823961,-73.83607],
    [40.82513,-73.83624],
    [40.8464305,-73.93213],
    [40.8458904,-73.930331],
    [40.84516,-73.92739],
    [40.84478,-73.925401],
    [40.8447106,-73.92412],
    [40.84478,-73.92246],
    [40.844891,-73.92045],
    [40.8451105,-73.91534],
    [40.8451305,-73.91194],
    [40.8451105,-73.910811],
    [40.84503,-73.909371],
    [40.82495,-73.836211],
    [40.82367,-73.83602],
    [40.8202605,-73.835941],
    [40.81888,-73.835951],
    [40.81555,-73.83628],
    [40.81275,-73.83627],
    [40.8124306,-73.836211],
    [40.81201,-73.836031],
    [40.81139,-73.83571],
    [40.79715,-73.82657],
    [40.7992604,-73.828251],
    [40.79751,-73.827091],
    [40.795711,-73.8258],
    [40.7932906,-73.82419],
    [40.7925904,-73.82378],
    [40.791681,-73.823501],
    [40.7907606,-73.823421],
    [40.7886106,-73.82362],
    [40.7870405,-73.82414],
    [40.78439,-73.8247],
    [40.78249,-73.825031],
    [40.7817,-73.82527],
    [40.6333906,-74.01586],
    [40.634,-74.015921],
    [40.63445,-74.01605],
    [40.6349304,-74.0163],
    [40.6354904,-74.016831],
    [40.6363404,-74.0181],
    [40.6376906,-74.020311],
    [40.63817,-74.02093],
    [40.6386004,-74.02127],
    [40.6391604,-74.02155],
    [40.63971,-74.02163],
    [40.6402406,-74.021561],
    [40.6332305,-74.016151],
    [40.63391,-74.01613],
    [40.6343505,-74.016241],
    [40.63485,-74.016501],
    [40.63533,-74.01694],
    [40.63622,-74.01827],
    [40.6375704,-74.02046],
    [40.63803,-74.021071],
    [40.6385,-74.02146],
    [40.63908,-74.02173],
    [40.63967,-74.02185],
    [40.64036,-74.02172],
    [40.64103,-74.02143],
    [40.7894406,-73.786291],
    [40.78918,-73.78792],
    [40.78876,-73.789521],
    [40.7882704,-73.790631],
    [40.7872906,-73.79263],
    [40.7866804,-73.7941],
    [40.7864,-73.794901],
    [40.7861204,-73.796241],
    [40.78602,-73.79693],
    [40.78596,-73.79837],
    [40.78615,-73.80182],
    [40.786331,-73.80525],
    [40.77158,-73.994441],
    [40.7713004,-73.99455],
    [40.77085,-73.99467],
    [40.76997,-73.99481],
    [40.7701604,-73.99477],
    [40.76986,-73.994831],
    [40.7695406,-73.99496],
    [40.769341,-73.99508],
    [40.768311,-73.9958],
    [40.768311,-73.9958],
    [40.76623,-73.99733],
    [40.76623,-73.99733],
    [40.76547,-73.9979],
    [40.76375,-73.999191],
    [40.763521,-73.99935],
    [40.7620804,-74.00136],
    [40.75985,-74.00306],
    [40.75775,-74.00457],
    [40.75775,-74.00457],
    [40.75576,-74.00601],
    [40.7544904,-74.006921],
    [40.7538404,-74.007241],
    [40.75415,-74.00712],
    [40.7502804,-74.00848],
    [40.74833,-74.007771],
    [40.73933,-74.01004],
    [40.73895,-74.01012],
    [40.7376,-74.010021],
    [40.7346,-74.01026],
    [40.72912,-74.010781],
    [40.72619,-74.011131],
    [40.71141,-73.97866],
    [40.712,-73.97793],
    [40.712661,-73.977511],
    [40.71379,-73.976931],
    [40.7150904,-73.976251],
    [40.7164,-73.9756],
    [40.7172404,-73.975231],
    [40.7182305,-73.97497],
    [40.7200604,-73.97471],
    [40.72158,-73.97453],
    [40.7223506,-73.974331],
    [40.72328,-73.973801],
    [40.7369006,-73.974651],
    [40.73868,-73.973391],
    [40.73897,-73.97323],
    [40.73955,-73.97298],
    [40.7415304,-73.97247],
    [40.7423406,-73.97229],
    [40.7428504,-73.97213],
    [40.74338,-73.971871],
    [40.7440804,-73.97141],
    [40.7446706,-73.97103],
    [40.7455605,-73.970301],
    [40.7465204,-73.96929],
    [40.7606904,-73.956791],
    [40.7601606,-73.95751],
    [40.75941,-73.9582],
    [40.758081,-73.959251],
    [40.75674,-73.96034],
    [40.75594,-73.960941],
    [40.7548505,-73.9623],
    [40.7535,-73.96347],
    [40.7530804,-73.963941],
    [40.7527204,-73.96419],
    [40.75171,-73.96518],
    [40.75041,-73.96625],
    [40.736971,-73.97477],
    [40.73651,-73.975011],
    [40.73595,-73.97506],
    [40.73512,-73.974911],
    [40.734061,-73.974611],
    [40.7327304,-73.974281],
    [40.731711,-73.97403],
    [40.7313705,-73.973851],
    [40.73096,-73.97359],
    [40.73067,-73.97328],
    [40.73019,-73.972671],
    [40.72966,-73.972181],
    [40.74047,-74.009251],
    [40.74137,-74.00893],
    [40.7431706,-74.008591],
    [40.7462304,-74.00797],
    [40.74812,-74.007651],
    [40.748701,-74.007691],
    [40.74971,-74.00819],
    [40.75048,-74.008321],
    [40.751611,-74.00789],
    [40.7537504,-74.00704],
    [40.75721,-74.00463],
    [40.76003,-74.002631],
    [40.7607,-74.002141],
    [40.76335,-73.999271],
    [40.76491,-73.99805],
    [40.7667406,-73.996681],
    [40.7693,-73.994801],
    [40.7699605,-73.994521],
    [40.7710104,-73.99438],
    [40.7715106,-73.9942],
    [40.6916,-73.99915],
    [40.69236,-73.99939],
    [40.69272,-73.999411],
    [40.69328,-73.99929],
    [40.6940504,-73.999001],
    [40.694461,-73.998831],
    [40.694931,-73.99862],
    [40.69543,-73.99836],
    [40.69592,-73.99813],
    [40.69675,-73.99772],
    [40.6977506,-73.997251],
    [40.698871,-73.996721],
    [40.7016405,-73.991121],
    [40.70158,-73.99033],
    [40.7014405,-73.98932],
    [40.70123,-73.98797],
    [40.7011505,-73.987461],
    [40.70094,-73.986521],
    [40.70073,-73.985921],
    [40.70055,-73.985581],
    [40.70029,-73.985211],
    [40.69975,-73.984681],
    [40.6995605,-73.984551],
    [40.70908,-73.9959],
    [40.70895,-73.996941],
    [40.70882,-73.997611],
    [40.70861,-73.99827],
    [40.70841,-73.998731],
    [40.7082204,-73.99911],
    [40.70806,-73.99937],
    [40.7081105,-73.99944],
    [40.7084705,-73.99884],
    [40.70868,-73.998331],
    [40.70886,-73.997751],
    [40.7091405,-73.99594],
    [40.8500304,-73.944831],
    [40.8492,-73.945241],
    [40.84835,-73.945271],
    [40.84443,-73.945051],
    [40.84353,-73.94511],
    [40.84261,-73.945271],
    [40.8412805,-73.94574],
    [40.8401804,-73.946311],
    [40.839541,-73.94677],
    [40.83856,-73.947611],
    [40.8376105,-73.94856],
    [40.8373205,-73.94883],
    [40.74877,-73.73895],
    [40.74799,-73.73784],
    [40.74717,-73.73689],
    [40.74625,-73.73597],
    [40.74547,-73.7350],
    [40.74372,-73.73251],
    [40.74184,-73.72849],
    [40.7406,-73.72642],
    [40.7396,-73.72512],
    [40.73889,-73.724471],
    [40.7380804,-73.723981],
    [40.71167,-73.72839],
    [40.71309,-73.72892],
    [40.71362,-73.72902],
    [40.71486,-73.7291],
    [40.71577,-73.72891],
    [40.71674,-73.72849],
    [40.71735,-73.72803],
    [40.71918,-73.72643],
    [40.72008,-73.72586],
    [40.72073,-73.72557],
    [40.72246,-73.72499],
    [40.72322,-73.7248],
    [40.73177,-73.72294],
    [40.71426,-73.729261],
    [40.7136604,-73.7292],
    [40.7123906,-73.728861],
    [40.71038,-73.72795],
    [40.7091206,-73.72763],
    [40.69798,-73.72709],
    [40.6909405,-73.72678],
    [40.6900905,-73.72678],
    [40.68932,-73.72673],
    [40.687321,-73.72641],
    [40.68526,-73.726341],
    [40.68526,-73.72634],
    [40.68331006,-73.72663],
    [40.68361,-73.72646],
    [40.68465005,-73.72547],
    [40.68503005,-73.72495],
    [40.68503005,-73.72495],
    [40.68523004,-73.72472],
    [40.6857301,-73.72444],
    [40.68613006,-73.7243301],
    [40.68663,-73.7244],
    [40.68687006,-73.7245201],
    [40.68726,-73.72485],
    [40.683644,-73.72667001],
    [40.68314,-73.72692],
    [40.681365,-73.72806],
    [40.678944,-73.72983],
    [40.678236,-73.73047001],
    [40.67642,-73.73234001],
    [40.67526,-73.7334],
    [40.673794,-73.73464001],
    [40.672886,-73.73533],
    [40.668966,-73.73805],
    [40.668534,-73.73831],
    [40.66639,-73.76248],
    [40.66579,-73.75706],
    [40.66574,-73.7563],
    [40.66571,-73.7494],
    [40.66542,-73.74244],
    [40.66552,-73.74173],
    [40.66564,-73.74133],
    [40.66592,-73.74068],
    [40.6661,-73.74033],
    [40.66662,-73.73964],
    [40.6671,-73.73915],
    [40.66821,-73.7382],
    [40.67221,-73.73551],
    [40.6665206,-73.76246],
    [40.66738,-73.77021],
    [40.66751,-73.77209],
    [40.66752,-73.772861],
    [40.66749,-73.775591],
    [40.66722,-73.78108],
    [40.66673,-73.786471],
    [40.66673,-73.78649],
    [40.66642,-73.78958],
    [40.66642,-73.78958],
    [40.66642,-73.790421],
    [40.6665006,-73.79161],
    [40.666771,-73.793241],
    [40.666771,-73.793241],
    [40.6667404,-73.796111],
    [40.6667404,-73.796111],
    [40.6667205,-73.799361],
    [40.6668105,-73.799681],
    [40.6669706,-73.79989],
    [40.73744001,-73.85188001],
    [40.737015,-73.85373001],
    [40.73673,-73.85543001],
    [40.736526,-73.85631001],
    [40.735335,-73.86033],
    [40.73384,-73.86514001],
    [40.732064,-73.87065001],
    [40.731755,-73.87178],
    [40.730294,-73.87656001],
    [40.72977,-73.87796],
    [40.8462505,-73.932161],
    [40.846951,-73.933641],
    [40.8484204,-73.937041],
    [40.8490306,-73.93994],
    [40.8493804,-73.94181],
    [40.8499005,-73.944651],
    [40.8509,-73.950381],
    [40.85139,-73.95283],
    [40.85186,-73.95525],
    [40.852771,-73.95957],
    [40.85302,-73.96052],
    [40.8531905,-73.96133],
    [40.84653,-73.932031],
    [40.8471706,-73.933591],
    [40.84859,-73.93696],
    [40.849211,-73.939901],
    [40.84955,-73.941791],
    [40.85004,-73.944611],
    [40.85116,-73.95037],
    [40.85161,-73.952851],
    [40.8520306,-73.955211],
    [40.85291,-73.959611],
    [40.853241,-73.96066],
    [40.8534605,-73.961481],
    [40.85526,-73.918591],
    [40.85266,-73.92085],
    [40.85004,-73.92327],
    [40.8473705,-73.92541],
    [40.84608,-73.926381],
    [40.84534,-73.926841],
    [40.8449504,-73.926961],
    [40.84467,-73.92685],
    [40.84454,-73.92668],
    [40.8443705,-73.9264],
    [40.84429,-73.92605],
    [40.8443506,-73.92568],
    [40.84667,-73.93188],
    [40.847331,-73.933501],
    [40.8487104,-73.936901],
    [40.84935,-73.93988],
    [40.84962,-73.94175],
    [40.8501204,-73.94462],
    [40.851271,-73.95037],
    [40.85172,-73.95283],
    [40.8521,-73.95515],
    [40.85295,-73.95957],
    [40.85329,-73.96061],
    [40.85352,-73.96142],
    [40.853621,-73.96192],
    [40.85513,-73.91865],
    [40.8526305,-73.920881],
    [40.85,-73.923291],
    [40.84653,-73.92628],
    [40.84525,-73.92703],
    [40.84454,-73.927421],
    [40.8442606,-73.927411],
    [40.84387,-73.92681],
    [40.84396,-73.92623],
    [40.84438,-73.92534],
    [40.8449,-73.92503],
    [40.84539,-73.92532],
    [40.8465405,-73.932021],
    [40.84611,-73.93075],
    [40.8452706,-73.92726],
    [40.84496,-73.925931],
    [40.8448206,-73.924811],
    [40.8448206,-73.923691],
    [40.84501,-73.92041],
    [40.84523,-73.91556],
    [40.8452404,-73.91198],
    [40.8452006,-73.91082],
    [40.84671,-73.931941],
    [40.8460306,-73.930181],
    [40.84539,-73.92753],
    [40.8456,-73.925891],
    [40.8448604,-73.92471],
    [40.84488,-73.92327],
    [40.8451305,-73.91885],
    [40.8452706,-73.913131],
    [40.84516,-73.909371],
    [40.77149,-73.99423],
    [40.7719,-73.99401],
    [40.77481,-73.99196],
    [40.77839,-73.989341],
    [40.77996,-73.988171],
    [40.78128,-73.987011],
    [40.7841305,-73.98492],
    [40.78593,-73.98366],
    [40.78773,-73.98286],
    [40.7894805,-73.982121],
    [40.79086,-73.981361],
    [40.7923506,-73.98027],
    [40.79319,-73.9795],
    [40.60399,-74.05225],
    [40.6035506,-74.05359],
    [40.60322,-74.05463],
    [40.60289,-74.05566],
    [40.6019605,-74.058451],
    [40.6017,-74.05925],
    [40.60157,-74.06018],
    [40.6015304,-74.061371],
    [40.60161,-74.062181],
    [40.601741,-74.06277],
    [40.6019406,-74.06386],
    [40.6021,-74.06449],
    [40.60414,-74.052411],
    [40.60479,-74.050351],
    [40.6075304,-74.041891],
    [40.6081,-74.040011],
    [40.6083804,-74.03924],
    [40.60408,-74.052241],
    [40.6036605,-74.05356],
    [40.6033506,-74.05459],
    [40.6029905,-74.055641],
    [40.60213,-74.058271],
    [40.60186,-74.05915],
    [40.601741,-74.060121],
    [40.60172,-74.06095],
    [40.60179,-74.06175],
    [40.6018506,-74.062621],
    [40.60201,-74.063791],
    [40.6021804,-74.06444],
    [40.60425,-74.052331],
    [40.6048705,-74.05037],
    [40.6076204,-74.041901],
    [40.6082306,-74.04004],
    [40.6083206,-74.03977],
    [40.60846,-74.03933],
    [40.6040405,-74.052321],
    [40.6047,-74.050301],
    [40.60743,-74.041851],
    [40.608031,-74.03998],
    [40.6082705,-74.039211],
    [40.6083804,-74.039301],
    [40.6107105,-74.03202],
    [40.6110506,-74.03144],
    [40.611501,-74.03094],
    [40.61272,-74.02992],
    [40.6134404,-74.02892],
    [40.6142306,-74.02803],
    [40.6163106,-74.02624],
    [40.6039704,-74.052281],
    [40.604651,-74.05021],
    [40.60737,-74.04182],
    [40.60795,-74.039971],
    [40.608211,-74.03919],
    [40.60846,-74.03933],
    [40.6107805,-74.03207],
    [40.6111,-74.03154],
    [40.6115804,-74.031051],
    [40.6127904,-74.030031],
    [40.6137105,-74.02903],
    [40.614411,-74.028201],
    [40.6163504,-74.02639]
  ];
  var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
  // zoom the map to the polyline
  map.fitBounds(polyline.getBounds());
}
