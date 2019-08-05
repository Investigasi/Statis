<script async='async' src='https://www.blogblog.com/dynamicviews/4224c15c4e7c9321/js/comments.js' type='text/javascript'/>
<script type='text/javascript'>
<b:if cond='data:post.numComments != 0'>
         var Items = <data:post.commentJso/>;
         var Msgs = <data:post.commentMsgs/>;
         var Config = <data:post.commentConfig/>;
        <b:else/>
         var Items = {};
         var Msgs = {};
         var Config = {&#39;maxThreadDepth&#39;:&#39;0&#39;};
        </b:if>
       //<![CDATA[
       //Global setting
        Config.maxThreadDepth = 3;//Kedalaman tingkat threaded comment
        Display_Emo = true;//Tampilkan emoticon? ketik "false" untuk menyembunyikan
        Replace_Youtube_Link = false;//Embed video YouTube, ketik "false" untuk mendisable
        Replace_Image_Link = false;//Auto replace link image,  ketik "false" untuk mendisable.
        Replace_Force_Tag = false;//Auto replace virtual tag contoh: [pre] menjadi <pre>, dan [/pre] menjadi </pre>, apabila salah menulis, tidak akan berfungsi
        Replace_Image_Ext = ['JPG', 'GIF', 'PNG', 'BMP'];//(support: jpg, gif, png, bmp),hanya berfungsi apabila Replace_Image_Link=true
        //Pengaturan Emoticon
        Emo_List = [
':)'   ,'https://cdn.statically.io/img/twemoji.maxcdn.com/36x36/1f600.png',
':('   ,'https://cdn.statically.io/img/twemoji.maxcdn.com/36x36/1f615.png',
'hihi'  ,'https://cdn.statically.io/img/twemoji.maxcdn.com/36x36/1f601.png',
':-)'   ,'https://cdn.statically.io/img/twemoji.maxcdn.com/36x36/1f60f.png',
':D'   ,'https://cdn.statically.io/img/twemoji.maxcdn.com/36x36/1f603.png',
'=D'   ,'https://cdn.statically.io/img/twemoji.maxcdn.com/36x36/1f62c.png',
':-d'   ,'https://cdn.statically.io/img/twemoji.maxcdn.com/36x36/1f604.png',
';('   ,'https://cdn.statically.io/img/twemoji.maxcdn.com/36x36/1f61e.png',
';-('   ,'https://cdn.statically.io/img/twemoji.maxcdn.com/36x36/1f62d.png',
'@-)'   ,'https://cdn.statically.io/img/twemoji.maxcdn.com/36x36/1f616.png',
':P'   ,'https://cdn.statically.io/img/twemoji.maxcdn.com/36x36/1f61c.png',
':o' ,'https://cdn.statically.io/img/twemoji.maxcdn.com/36x36/1f62e.png',     
':>)','https://cdn.statically.io/img/twemoji.maxcdn.com/36x36/1f606.png',     
'(o)' ,'https://cdn.statically.io/img/twemoji.maxcdn.com/36x36/1f609.png',     
':p' ,'https://cdn.statically.io/img/twemoji.maxcdn.com/36x36/1f614.png',     
':-?' ,'https://cdn.statically.io/img/twemoji.maxcdn.com/36x36/2753.png', 
'(p)' ,'https://cdn.statically.io/img/twemoji.maxcdn.com/36x36/1f619.png', 
':-s' ,'https://cdn.statically.io/img/twemoji.maxcdn.com/36x36/1f625.png',
'(m)' ,'https://cdn.statically.io/img/twemoji.maxcdn.com/36x36/1f620.png',
'8-)' ,'https://cdn.statically.io/img/twemoji.maxcdn.com/36x36/1f60e.png',
':-t' ,'https://cdn.statically.io/img/twemoji.maxcdn.com/36x36/1f624.png',
':-b' ,'https://cdn.statically.io/img/twemoji.maxcdn.com/36x36/1f634.png',
'b-(' ,'https://cdn.statically.io/img/twemoji.maxcdn.com/36x36/1f635.png',
':-#' ,'https://cdn.statically.io/img/twemoji.maxcdn.com/36x36/1f637.png',
'=p~' ,'https://cdn.statically.io/img/twemoji.maxcdn.com/36x36/1f35c.png',
'$-)' ,'https://cdn.statically.io/img/twemoji.maxcdn.com/36x36/1f4b5.png',
'(y)' ,'https://cdn.statically.io/img/twemoji.maxcdn.com/36x36/1f44d.png',
'(f)' ,'https://cdn.statically.io/img/twemoji.maxcdn.com/36x36/1f33a.png',
'x-)' ,'https://cdn.statically.io/img/twemoji.maxcdn.com/36x36/1f60d.png',
'(k)' ,'https://cdn.statically.io/img/twemoji.maxcdn.com/36x36/1f496.png',
'(h)' ,'https://cdn.statically.io/img/twemoji.maxcdn.com/36x36/1f44f.png',
'cheer' ,'https://cdn.statically.io/img/twemoji.maxcdn.com/36x36/1f378.png',
'rock' ,'https://cdn.statically.io/img/twemoji.maxcdn.com/2/72x72/1f918.png',
':ng' ,'https://cdn.statically.io/img/twemoji.maxcdn.com/2/72x72/2764.png',
'poop' ,'https://cdn.statically.io/img/twemoji.maxcdn.com/2/72x72/1f4a9.png',
        ];
                                //Config Force tag list, define all in lower case
                                Force_Tag = [
                                    '[pre]','<pre>',
                                    '[/pre]','</pre>',
                                    '<pre class="brush: plain; title: ; notranslate" title="">','&lt;code&gt;',
                                    '</pre>','</code>'
                                ];
var Cur_Cform_Hdr = '.comment_form';
var Cur_Cform_Url = $('#comment-editor').attr('src');

function trim(str) {
    var whitespace = ' \n\r\t\f\x5b\x5d\x7c\x7d\x3c\x3e\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000';
    for (var i = 0; i < str.length; i++) {
        if (whitespace.indexOf(str.charAt(i)) != -1) {
            str = str.substring(0, i);
            break
        }
    }
    return str
}
$('#comment_block .comment_body p').html(function(index, oldhtml) {
    if (Replace_Youtube_Link) {
        var search_key = 'https://www.youtube.com/watch?v=';
        var check_index = oldhtml.indexOf(search_key);
        while (check_index != -1) {
            ht = oldhtml.substring(check_index);
            yt_link = trim(ht);
            var yt_code_index = yt_link.indexOf('&');
            var yt_code = '';
            if (yt_code_index == -1) {
                yt_code = yt_link.substring(search_key.length)
            } else {
                yt_code = yt_link.substring(search_key.length, yt_code_index)
            }
            var yt_video = '<iframe class="comment_youtube" src="https://www.youtube.com/embed/' + yt_code + '?autohide=1" frameborder="0" allowfullscreen></iframe>';
            oldhtml = oldhtml.substring(0, check_index) + yt_video + oldhtml.substring(check_index + yt_link.length);
            check_index = oldhtml.indexOf(search_key);
            if (check_index == -1) {
                search_key = 'https://www.youtube.com/watch?v=';
                check_index = oldhtml.indexOf(search_key)
            }
        }
    }
    if (Replace_Image_Link) {
        var save_html = '';
        var temp_html = oldhtml;
        for (var i = 0; i < Replace_Image_Ext.length; i++) {
            var search_key = '.' + Replace_Image_Ext[i];
            var upper_html = temp_html.toUpperCase();
            var check_index = upper_html.indexOf(search_key);
            while (check_index != -1) {
                img_src = temp_html.substring(0, check_index + search_key.length);
                upper_html = img_src.toUpperCase();
                var http_search = 'HTTPS://';
                var find_http = upper_html.indexOf(http_search);
                var save_http = '';
                while (find_http != -1) {
                    save_http = http_search.toLowerCase();
                    img_src = img_src.substring(find_http + http_search.length);
                    upper_html = img_src.toUpperCase();
                    find_http = upper_html.indexOf(http_search)
                }
                http_search = 'HTTPS://';
                upper_html = img_src.toUpperCase();
                find_http = upper_html.indexOf(http_search);
                while (find_http != -1) {
                    save_http = http_search.toLowerCase();
                    img_src = img_src.substring(find_http + http_search.length);
                    upper_html = img_src.toUpperCase();
                    find_http = upper_html.indexOf(http_search)
                }
                if (save_http == '' || img_src.length < 6) {
                    break
                }
                img_src = save_http + img_src;
                save_html += temp_html.substring(0, check_index + search_key.length - img_src.length) + '<img src="' + img_src + '" class="comment_img"/>';
                temp_html = temp_html.substring(check_index + search_key.length);
                upper_html = temp_html.toUpperCase();
                check_index = upper_html.indexOf(search_key)
            }
        }
        oldhtml = save_html + temp_html
    }
    if (Display_Emo) {
        var length = Emo_List.length;
        if (length % 2 == 1) {
            length--
        }
        for (var i = 0; i < length; i += 2) {
            var img_html = '<img src="' + Emo_List[i + 1] + '" class="comment_emo"/>';
            check_index = oldhtml.indexOf(Emo_List[i]);
            while (check_index != -1) {
                oldhtml = oldhtml.substring(0, check_index) + img_html + oldhtml.substring(check_index + Emo_List[i].length);
                check_index = oldhtml.indexOf(Emo_List[i])
            }
        }
    }
    if (Replace_Force_Tag) {
        var length = Force_Tag.length;
        if (length % 2 == 1) {
            length--
        }
        for (var i = 0; i < length; i += 2) {
            while (1) {
                var temp_html = oldhtml.toLowerCase();
                check_index = temp_html.indexOf(Force_Tag[i]);
                if (check_index != -1) {
                    oldhtml = oldhtml.substring(0, check_index) + Force_Tag[i + 1] + oldhtml.substring(check_index + Force_Tag[i].length)
                } else {
                    break
                }
            }
        }
    }
    return oldhtml
});
$('.comment_emo_list').html(function(index, oldhtml) {
    if (Display_Emo) {
        var length = Emo_List.length;
        if (length % 2 == 1) {
            length--
        }
        var newhtml = '';
        for (var i = 0; i < length; i += 2) {
            var img_code = '<span>' + Emo_List[i] + '</span>';
            var img_html = '<img src="' + Emo_List[i + 1] + '" class="comment_emo"/>';
            newhtml += '<div class="item">' + img_html + img_code + '</div>'
        }
        return newhtml
    }
});
$('.comment_wrap .comment_body p').html(function(i, h) {
    temp = h.toLowerCase();
    index = temp.indexOf('@<a href="#c');
    if (index != -1) {
        index_tail = temp.indexOf('</a>', index);
        if (index_tail != -1) {
            h = h.substring(0, index) + h.substring(index_tail + 4)
        }
    }
    return h
});

function Valid_Par_Id(par_id) {
    r = par_id.indexOf('c');
    if (r != -1) par_id = par_id.substring(r + 1);
    return par_id
}
function Cform_Ins_ParID(par_id) {
    par_id = '&parentID=' + par_id + '#%7B';
    n_cform_url = Cur_Cform_Url.replace(/#%7B/, par_id);
    return n_cform_url
}
function Reset_Comment_Form() {
    html = $(Cur_Cform_Hdr).html();
    $(Cur_Cform_Hdr).html('');
    Cur_Cform_Hdr = '.comment_form';
    $(Cur_Cform_Hdr).html(html);
    $('#comment-editor').attr('src', Cur_Cform_Url)
}
function Display_Reply_Form(e) {
    par_id = $(e).attr('id');
    par_id = Valid_Par_Id(par_id);
    html = $(Cur_Cform_Hdr).html();
    if (Cur_Cform_Hdr == '.comment_form') {
        reset_html = '<a href="#origin_cform" onclick="Reset_Comment_Form()">' + Msgs.addComment + '</a><a name="origin_cform"/>';
        $(Cur_Cform_Hdr).html(reset_html)
    } else {
        $(Cur_Cform_Hdr).html('')
    }
    Cur_Cform_Hdr = '#r_f_c' + par_id;
    $(Cur_Cform_Hdr).html(html);
    $('#comment-editor').attr('src', Cform_Ins_ParID(par_id))
}
cur_url = window.location.href;
search_formid = '#comment-form_';
search_index = cur_url.indexOf(search_formid);
if (search_index != -1) {
    ret_id = cur_url.substring(search_index + search_formid.length);
    Display_Reply_Form('#rc' + ret_id)
}
for (var i = 0; i < Items.length; i++) {
    if ('parentId' in Items[i]) {
        var par_id = Items[i].parentId;
        var par_level = parseInt($('#c' + par_id + ':first').attr('level'));
        $('#c' + par_id + ' .comment_child:first').html(function(index, oldhtml) {
            var child_id = Items[i].id;
            if (par_level >= Config.maxThreadDepth) {
                $('#c' + child_id + ':first .comment_reply').remove()
            }
            var child_html = $('#c' + child_id + ':first').html();
            child_html = '<div class="comment_wrap" id="c' + child_id + '" level="' + (par_level + 1) + '">' + child_html + '</div>';
            $('#c' + child_id).remove();
            return (oldhtml + child_html)
        })
    }
}
//]]>
</script>