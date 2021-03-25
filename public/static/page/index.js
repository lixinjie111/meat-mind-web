function Paging(options) {
    let defaultValue = {
        total: 0,
        current: 1,
        firstText: '首页',
        prevText: '上一页',
        nextText: '下一页',
        lastText: '尾页',
        PageSize: 10,
        PageNum: 5,
        container: document.getElementsByClassName('paging')[0]
    }

    this.options = Object.assign({}, defaultValue, options);
    this.show();
    this.PageClick()
}

Paging.prototype.show = function () {
    let disable = "";
    let PageTotalNum = this.getPageTotalNum();
    this.options.container.innerHTML = "";
    if(this.options.current === 1){
        disable = 'disable'
    }
    // this.createElement('first ' + disable, this.options.firstText);
    this.createElement('prev ' + disable, this.options.prevText);

    this.createNumElement();

    disable = ""
    if(this.options.current === PageTotalNum){
        disable = 'disable'
    }
    this.createElement('next ' + disable, this.options.nextText);
    // this.createElement('last ' + disable, this.options.lastText);

    let span = document.createElement('span');
    let i = `<span>${this.options.current}</span> / <span>${PageTotalNum}</span>`;
    span.innerHTML = i;
    this.options.container.appendChild(span)
}

Paging.prototype.createNumElement = function() {
    let min = this.options.current - Math.floor(this.options.PageNum / 2);
    if(min < 1) {
        min = 1;
    }
    let max = min + this.options.PageNum - 1;
    let PageTotalNum = this.getPageTotalNum();
    if (max > PageTotalNum){
        max = PageTotalNum;
    }
    let active = "";
    for(let i = min; i <= max; i ++) {
        if(this.options.current === i) {
            active = 'active';
        }else{
            active = '';
        }
        this.createElement('pagingDiv ' + active, i);
    }
}


Paging.prototype.createElement = function(specialStyle, content) {
    let oDiv = document.createElement('div');
    oDiv.className = specialStyle;
    oDiv.innerText = content;
    this.options.container.appendChild(oDiv);
}

Paging.prototype.getPageTotalNum = function() {
    return Math.ceil(this.options.total / this.options.PageSize)
}

Paging.prototype.PageClick = function() {
    let _this = this;
    let PageTotalNum = this.getPageTotalNum();
    this.options.container.addEventListener('click', function(e) {
        if(e.target.classList.contains('first')){
            _this.toPage(1);
        } else if (e.target.classList.contains('prev')) {
            _this.toPage(_this.options.current - 1);
        } else if (e.target.classList.contains('next')) {
            _this.toPage(_this.options.current + 1);
        } else if (e.target.classList.contains('last')) {
            _this.toPage(PageTotalNum);
        } else if(e.target.classList.contains('pagingDiv')){
            _this.toPage(+e.target.innerText);
        }
    })
}

Paging.prototype.toPage = function (page){

    let PageTotalNum = this.getPageTotalNum();
    if(page < 1) {
        page = 1;
    }
    if(page > PageTotalNum){
        page = PageTotalNum;
    }
    this.options.current = page;
    this.show();

    var page1 = page;
    var pageSize = 10;
    function GetXhr(){
        var xhr=null;
        if(XMLHttpRequest){
            xhr=new XMLHttpRequest();
        }else{
            xhr=new ActiveXObject("Microsoft.XMLHTTP");
        }
        return xhr;
    }
    function XhrGetRequest(){
        var xhr= GetXhr();
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4){
                var contentContainerDOM = document.getElementById('contentContainer');
                contentContainerDOM.innerHTML = '';
                let resArr = [];
                let resObj = JSON.parse(xhr.responseText);
                // let toalCount = resObj.count;
                resArr = resObj.data.slice((page-1)*10,10*page) || [];
                let pageData = resArr;
                // new Paging({
                //     total: toalCount,
                // })
                for(var i=0;i<pageData.length;i++){
                    var contentContainerDOM = document.getElementById('contentContainer');
                    var itemContainerDOM = document.createElement('div');
                    var item_Name = document.createElement('div');
                    var item_desc = document.createElement('div');
                    var item_ver = document.createElement('div');
                    var item_btn = document.createElement('div');

                    itemContainerDOM.className = 'itemContainer';
                    item_Name.className = 'item_Name';
                    item_Name.innerText = pageData[i].title.slice(0,8) + '...';
                    item_desc.className = 'item_desc';
                    item_desc.innerText = pageData[i].title.replace(/报告/g,'数据');
                    item_ver.className = 'item_ver';
                    item_ver.innerText = pageData[i].time;
                    item_btn.className = 'item_btn';
                    item_btn.innerText = '购买';

                    itemContainerDOM.appendChild(item_Name);
                    itemContainerDOM.appendChild(item_desc);   
                    itemContainerDOM.appendChild(item_ver);    
                    itemContainerDOM.appendChild(item_btn);    
                    contentContainerDOM.appendChild(itemContainerDOM);
                }
            }
        }
        xhr.open('get',`data.json?page=${page1}&size=${pageSize}`,true);
        xhr.send(null);
    }
    XhrGetRequest();
    
}