$(document).ready(function(){
	
	document.addEventListener('touchmove', function (event) {
	if (event.scale !== 1) { event.preventDefault(); }
	}, false);
	
	//Slide to sections
	$('.slide-nav .nav-link').on('click touchstart', function(e) {
        if($(this).hasClass('targetNew')){
            return true;
        }
		e.preventDefault();
		e.stopImmediatePropagation;
		$('html,body').animate({scrollTop: $($(this).attr('href')).offset().top}, 1700);
	});

    $('#footer a.nav-link').on('click touchstart', function(e) {
        if($(this).hasClass('targetNew')){
            return true;
        }
        e.preventDefault();
        e.stopImmediatePropagation;
        $('html,body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1700);
    });
	
//	Carousel
	var point = 0;
	var pointText = 0;
	
	$('.arrow.right').click(function(){
		point -= 100;
		pointText -= 25;
		
		if(point < -300){
			point = 0;
		}
		if(pointText < -75){
			pointText = 0;
		}
		
		$('.car-img-container').css('transform', 'translateX(' + point + '%)');
		$('.car-content').css('transform', 'translateX(' + pointText + '%)');
	});
	
	$('.arrow.left').click(function(){
		point += 100;
		pointText += 25;
		
        if(point == 100){
			point = -300;
		}
		if(pointText == 25){
			pointText = -75;
		}
		
		$('.car-img-container').css('transform', 'translateX(' + point + '%)');
		$('.car-content').css('transform', 'translateX(' + pointText + '%)');
	});
	
//	Animation
	/*var posTop = $(window).scrollTop();
	var animationTop = $('.animation').offset().top;
	var animation = animationTop - 600;

	if(posTop > animation){
		$('.animation').addClass('active');
	}
	$(window).scroll(function() {
		var posTop = $(window).scrollTop();

		if(posTop > animation){
			$('.animation').addClass('active');
		}
	});*/

	// Counter
    // $('.counter').each(function () {
     //    $(this).prop('Counter',0).animate({
     //        Counter: $(this).text()
     //    }, {
     //        duration: 4000,
     //        easing: 'swing',
     //        step: function (now) {
     //            $(this).text(Math.ceil(now));
     //        }
     //    });
    // });
	//Carousel
    var mov_slider = $(".mov_slider .owl-carousel");
    mov_slider.owlCarousel({
        loop: false,
        center:true,
        items: 1,
        dots: false,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            765:{
                items:1
            }
        }
    });

    //team Slide mobile
  let left = document.getElementById('leftTeam');
  let right = document.getElementById('rightTeam');
  let items = document.getElementsByClassName('t1');
  const arr = [];
  for (let i = 1; i<= items.length; i++){
    arr.push(i*100);

  }
  console.log(arr[arr.length-2]);
  let count = 0;
  right.addEventListener("click", function(){
    if (count !== arr[arr.length-2]) {
      count +=100;
      $( ".t1" ).css( "right", count +"%" );
    }
  });
  left.addEventListener("click", function(){
    if (count !== 0) {
      count -=100;
      $( ".t1" ).css( "right", count +"%" );
    }
  });
  //team Slide mobile




    $('.countdown').downCount({
        date: '10/22/2018 13:00:00',
        offset: +1
    });

    // slide parent slider
    $('.mov_slider .arr.right_arr').click(function() {
        mov_slider.trigger('next.owl.carousel');
    });

    $('.mov_slider .arr.left_arr').click(function() {
        mov_slider.trigger('prev.owl.carousel');
    });

    $('#team .arr.right_arr').click(function() {
        team_slider.trigger('next.owl.carousel');
    });

    $('#team .arr.left_arr').click(function() {
        team_slider.trigger('prev.owl.carousel');
    });



    $('.prod_sections .nav-tabs a').on('shown.bs.tab', function(event){
        var imgClass = $(event.target).data('img');
        console.log(imgClass);
		$('.prod_image img.active').removeClass('active');
        $('.prod_image .img-'+imgClass).addClass('active');
    });


    $(document).ready(function(){
        $('.modal_read_more').on('click', function() {
            var name = $(this).closest('.team_item').find('.team_member_name').text();
            var position = $(this).closest('.team_item').find('.team_member_prof').text();
            var description = $(this).closest('.team_item').find('.team_member_info_long_text_content').text();
            var teamImg = $(this).closest('.team_item').find('.teamImg').attr('src');
            var linkedinUrl = $(this).closest('.team_item').find('.linkedin_logo_small').attr('href');
            $('.modal-team .teamName').text(name);
            $('.modal-team .teamPosition').text(position);
            $('.modal-team .description p').text(description);
            $('.modal-team .teamImg').attr('src', teamImg);
            $('.modal-team .teamImg').attr('alt', name);
            $('.modal-team .linkedin_logo_small').attr('href', linkedinUrl);
            $('.modal-team').modal('show');
        })
    });

    let show = true;

    if (window.matchMedia("(max-width: 575px)").matches) {
      show = false;
    }

    window.chart = echarts.init(document.getElementById('charterContent'));
	
        option = {
        backgroundColor: '#fff',
        title: {
            text: '',
            subtext: '',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{b} : {d}% "
        },
        legend: {
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                magicType: {
                    show: true,
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '25%',
                            width: '50%',
                            funnelAlign: 'center',
                            max: 1548
                        }
                    }
                }
            }
        },
        color: [
            "#cd2830",
            "#ec4039",
            "#ec9e40",
            "#faf296",
            "#ebd438",
            "#e8a600",
            "#ec7137"
        ],
        calculable: true,
        series: [
            {
                type: 'pie',
                radius: ['30%', '70%'],
                itemStyle: {
                    normal: {
                        label: {
                            show: show,
                            textStyle: {
                                fontSize: '12',
                                fontWeight: '500',
                                color: '#000',
                            }
                        },
                        labelLine: {
                            show: show,
                        },
                    },
                    emphasis: {
                        label: {
                            show: show,
                            position: 'center',
                            textStyle: {
                                fontSize: '12',
                                fontWeight: '500',
                                color: '#000'
                            }
                        }
                    }
                },
                label: {
                    normal: {
                        textStyle: {
                            fontSize: 12,
                        },
                        formatter: function (param) {
                            return param.name + ': ' + Math.round(param.percent) + '%';
                        }
                    }
                },
                data: [
                    { value: '30', name: 'ICO' },
                    { value: '20', name: 'Reserve Fund' },
                    { value: '20', name: 'Partner' },
                    { value: '10', name: 'Consultant' },
                    { value: '10', name: 'Team' },
                    { value: '5', name: 'Liquidity Fund' },
                    { value: '5', name: 'Bounty' }
                ]
            }
        ]
    };
    chart.setOption(option);
});

  window.addEventListener("resize", function() {
    if (window.matchMedia("(max-width: 575px)").matches) {
      chart.setOption({
        series: [
          {
            type: 'pie',
            radius: ['30%', '70%'],
            itemStyle: {
              normal: {
                label: {
                  show: false,
                  textStyle: {
                    fontSize: '12',
                    fontWeight: '500',
                    color: '#000',
                  }
                },
                labelLine: {
                  show: false,
                },
              },
              emphasis: {
                label: {
                  show: false,
                  position: 'center',
                  textStyle: {
                    fontSize: '12',
                    fontWeight: '500',
                    color: '#000'
                  }
                }
              }
            },
            label: {
              normal: {
                textStyle: {
                  fontSize: 12,
                },
                formatter: function (param) {
                  return param.name + ': ' + Math.round(param.percent) + '%';
                }
              }
            },
            data: [
              { value: '30', name: 'ICO' },
              { value: '20', name: 'Reserve Fund' },
              { value: '20', name: 'Partner' },
              { value: '10', name: 'Consultant' },
              { value: '10', name: 'Team' },
              { value: '5', name: 'Liquidity Fund' },
              { value: '5', name: 'Bounty' }
            ]
          }
        ]
      });
      console.log("Screen width is at least 500px");
    } else {
      chart.setOption({
        series: [
          {
            type: 'pie',
            radius: ['30%', '70%'],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  textStyle: {
                    fontSize: '12',
                    fontWeight: '500',
                    color: '#000',
                  }
                },
                labelLine: {
                  show: true,
                },
              },
              emphasis: {
                label: {
                  show: true,
                  position: 'center',
                  textStyle: {
                    fontSize: '12',
                    fontWeight: '500',
                    color: '#000'
                  }
                }
              }
            },
            label: {
              normal: {
                textStyle: {
                  fontSize: 12,
                },
                formatter: function (param) {
                  return param.name + ': ' + Math.round(param.percent) + '%';
                }
              }
            },
            data: [
              { value: '30', name: 'ICO' },
              { value: '20', name: 'Reserve Fund' },
              { value: '20', name: 'Partner' },
              { value: '10', name: 'Consultant' },
              { value: '10', name: 'Team' },
              { value: '5', name: 'Liquidity Fund' },
              { value: '5', name: 'Bounty' }
            ]
          }
        ]
      });
    }
  });