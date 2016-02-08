var express = require('express');
var router = express.Router();

var service = require('../apis/blogservice');
var demoservice = require('../apis/demoservice');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: '首页',
        works:[
            {
                _id: 1,
                title: '提高Web页面性能的技巧',
                author:'南北',
                published:'2016-01-28',
                content:'现在动辄几兆大小的页面加载量，让性能优化成了不可避免的热门话题。WEB 应用越流畅，用户体验就会越好，继而带来更多的访问量。这也就是说，我们应该反省一下那些过度美化的 CSS3 动画和多重操作的 DOM 元素是否都考虑到了在性能方面的影响。',
                desc:'提高Web页面性能的技巧 = =现在动辄几兆大小的页面加载量',
                clickUp: 456,
                clickDown:32
            },
            {
                _id: 2,
                title: '【转载】Web动画性能指南',
                author:'大漠',
                published:'2016-01-22',
                content:'随着网页功能变得愈发复杂和精细，以及手机端H5发展中所遇到的硬件性能瓶颈，网页的运行时性能问题变得越来越突出。而用户对于网页运行时性能最直观的感受，莫过于UI操作的流畅程度。流畅或卡顿，爽或不爽，皆在于每个UI动画细节之间。本文旨在帮助理解动画卡顿与流畅的原因，卡顿问题的调试方法，以及从实践中总结出实现流畅动画的规律。为构建操作流畅的网页提供参考。',
                desc:'随着网页功能变得愈发复杂和精细，以及手机端H5发展中所遇到的硬件性能瓶颈',
                clickUp: 87979,
                clickDown:647
            }
        ]
    });
});
// page-list
router.get('/list', function(req, res, next) {
    res.render('list', {
        title: '列表页',
        works:[
            {
                _id: 1,
                title: '提高Web页面性能的技巧',
                author:'南北',
                published:'2016-01-28',
                content:'现在动辄几兆大小的页面加载量，让性能优化成了不可避免的热门话题。WEB 应用越流畅，用户体验就会越好，继而带来更多的访问量。这也就是说，我们应该反省一下那些过度美化的 CSS3 动画和多重操作的 DOM 元素是否都考虑到了在性能方面的影响。',
                desc:'提高Web页面性能的技巧 = =现在动辄几兆大小的页面加载量',
                clickUp: 456,
                clickDown:32
            }
        ]
    });
});
// page-details
router.get('/detail/:id', function(req, res, next) {
    var id = req.params.id || 2;
    var data = [{
        _id: 1,
        title: '提高Web页面性能的技巧',
        author:'南北',
        published:'2016-01-28',
        content:'现在动辄几兆大小的页面加载量，让性能优化成了不可避免的热门话题。WEB 应用越流畅，用户体验就会越好，继而带来更多的访问量。这也就是说，我们应该反省一下那些过度美化的 CSS3 动画和多重操作的 DOM 元素是否都考虑到了在性能方面的影响。',
        desc:'提高Web页面性能的技巧 = =现在动辄几兆大小的页面加载量',
        clickUp: 456,
        clickDown:32
    },{
        _id: 2,
        title: '【转载】Web动画性能指南',
        author:'大漠',
        published:'2016-01-22',
        content:'随着网页功能变得愈发复杂和精细，以及手机端H5发展中所遇到的硬件性能瓶颈，网页的运行时性能问题变得越来越突出。而用户对于网页运行时性能最直观的感受，莫过于UI操作的流畅程度。流畅或卡顿，爽或不爽，皆在于每个UI动画细节之间。本文旨在帮助理解动画卡顿与流畅的原因，卡顿问题的调试方法，以及从实践中总结出实现流畅动画的规律。为构建操作流畅的网页提供参考。',
        desc:'随着网页功能变得愈发复杂和精细，以及手机端H5发展中所遇到的硬件性能瓶颈',
        clickUp: 87979,
        clickDown:647
    }];
    var index = id - 1;

    res.render('detail', {
        title: '详情页',
        work:data[index]
    });
});
// admin
router.get('/admin', function(req, res, next) {
    res.render('admin', {
        title:'管理页',
        work:{
            title: '',
            author:'',
            published:'',
            content:'',
            desc:'',
            clickUp: '',
            clickDown:''
        }
    });
});

router.get('/admin/update', function(req, res, next) {
    res.render('admin/update', {
        title:'修改页',
        work:{
            title: 'update',
            author:'南北',
            published:'2016-01-28',
            content:'现在动辄几兆大小的页面加载量，让性能优化成了不可避免的热门话题。WEB 应用越流畅，用户体验就会越好，继而带来更多的访问量。这也就是说，我们应该反省一下那些过度美化的 CSS3 动画和多重操作的 DOM 元素是否都考虑到了在性能方面的影响。',
            desc:'提高Web页面性能的技巧 = =现在动辄几兆大小的页面加载量',
            clickUp: 456,
            clickDown:32
        }
    });
});

router.get('/apis/get_blog_lists', service.getBlogList);

router.get('/apis/get_demo_lists', demoservice.getDemoList);

router.post('/apis/build', demoservice.build);

module.exports = router;
