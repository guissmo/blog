<?php


// Allow requests from any origin
// header("Access-Control-Allow-Origin: *");

// Allow specified methods
// header("Access-Control-Allow-Methods: POST, GET, OPTIONS");

	function sticky_caps($over)
	{
	$return = "";
	$over = explode(' ', $over);

		foreach ($over as $overs)
		{
		for ($i = 0; $i < strlen($overs); $i++)
		{
			if($overs[$i] == "o" || $overs[$i] == "O")
			{
				if (rand(0,4) == 0)
				{
				  $overs[$i] = "0";
				}
			}
			
			if (rand(0,1) == 0)
			{
				// assign the lowercase letters back into the array
				$bits[] = strtolower($overs[$i]);
			}
			else
			{
				// assign the uppercase letters back into the array
				$bits[] = strtoupper($overs[$i]);
			}
		}
		// add the space beetween the words back as we removed it when we exploded the array
		$bits[] = ' ';
		}

		// put the peices back together
		$overs = implode('', $bits);
	
		// return the overal value
		return $overs;
	}	
	
  $sabi = " ".$_POST['translateme'];
  
  //echo substr_count($sabi,"<br>");
  
  if($sabi == "")
  {
	switch (rand(1,7))
	{
	    case 1: $sabi="gudam p0h mga peepz of da world! -gm-";break;
        case 2: $sabi="ingat p0h u lagi. mwahuggz. -gm-";break;
        case 3: $sabi="kmain na me. kmain nb u? -gm-";break;
        case 4: $sabi="penge p0h ng kowtz. lolz. hehe. -gm-";break;
        case 5: $sabi="la p0h me magawa. -gm-";break;
        case 6: $sabi="pwede p0h b mging txtm8 us? -gm-";break;
        case 7: $sabi="nkload n rin me ng unli sa wks!!!!! -gm-";break;

	}
  }
	$sabi = strtolower($sabi);
    $sabi = str_replace("'","",$sabi);
	$sabi = str_replace("’","",$sabi);
	$sabi = str_replace("‘","",$sabi);
	$sabi = str_replace("-"," ||-||",$sabi);
	$sabi = str_replace(","," ||,||",$sabi);
	$sabi= str_replace("jono sanchez","jono ~sexytime~ sanchez",$sabi);
	$sabi= str_replace(" say "," sei ",$sabi);
	$sabi= str_replace(" lang"," lng",$sabi);
	$sabi= str_replace(" yong"," yng",$sabi);
	$sabi= str_replace(" yong "," yng ",$sabi);
	$sabi= str_replace(" iyong"," yng",$sabi);
	$sabi= str_replace("time","tym",$sabi);
	$sabi= str_replace("say","xai",$sabi);
	$sabi = str_replace("baka","vkh",$sabi);
	$sabi= str_replace("kaka","ka2",$sabi);
	$sabi= str_replace("pinaka","pnk",$sabi);
	$sabi= str_replace(" hindi "," d ",$sabi);
	$sabi= str_replace(" di "," d ",$sabi);
	$sabi= str_replace("kem","km",$sabi);
	$sabi = str_replace("okay","ok",$sabi);
	$sabi = str_replace("huwag","wg",$sabi);
	$sabi = str_replace("wag","wg",$sabi);
	$sabi = str_replace("sc","x",$sabi);
	$sabi = str_replace("kayo","kyu",$sabi);
	$sabi = str_replace("tia","xa",$sabi);
	$sabi=str_replace("okay","ok",$sabi);    
    $sabi=str_replace(" sc"," x",$sabi);
    $sabi=str_replace("kayo","kyu",$sabi);
    $sabi=str_replace("tia","xa",$sabi);
    $sabi=str_replace("hehe","jeje",$sabi);
    $sabi=str_replace("haha","jaja",$sabi);
    $sabi=str_replace("jehe","jeje",$sabi);
    $sabi=str_replace("jaha","jaja",$sabi);
    $sabi=str_replace("ate","z8z",$sabi);
    $sabi=str_replace(" z8z "," ate ",$sabi);
    $sabi=str_replace("z8z","8",$sabi);
    $sabi=str_replace("all","ol",$sabi);
    $sabi=str_replace(" out "," zoutz ",$sabi);
    $sabi=str_replace("out ","outz ",$sabi);
    $sabi=str_replace("zoutz","awtz",$sabi);
    $sabi=str_replace("it's","8s",$sabi);
    $sabi=str_replace("baby","bheybie",$sabi);
    $sabi=str_replace("quote","kowt",$sabi);
    $sabi=str_replace("siya","xia",$sabi);
    $sabi=str_replace("kasi","kz",$sabi);
    $sabi=str_replace("ike","yk",$sabi);
    $sabi=str_replace(" are "," zarez",$sabi);
    $sabi=str_replace("are ","eyr",$sabi);
    $sabi=str_replace(" zarez "," are ",$sabi);
    $sabi=str_replace("sayo","xeio",$sabi);
    $sabi=str_replace("girl","gurl",$sabi);
    $sabi=str_replace("ano","nu",$sabi);
    $sabi=str_replace("s ","z ",$sabi);
    $sabi=str_replace("hindi","ndi",$sabi);
    $sabi=str_replace("ka lang","lng u",$sabi);
    $sabi=str_replace("nandito","dito",$sabi);
    $sabi=str_replace("dito na ako","d2 n p0h me",$sabi);
    $sabi=str_replace("po ","p0h ",$sabi);
    $sabi=str_replace("gusto","gs2",$sabi);
    $sabi=str_replace("no ","n0h ",$sabi);
    $sabi=str_replace("siy","x",$sabi);
    $sabi=str_replace("nang","ng",$sabi);
    $sabi=str_replace("heto","eto",$sabi);
    $sabi=str_replace("eto ","e2 ",$sabi);
    $sabi=str_replace("etong ","e2ng ",$sabi);
    $sabi=str_replace("sy","x",$sabi);
    $sabi=str_replace("love","luv",$sabi);
    $sabi=str_replace("hate","8",$sabi);
    $sabi=str_replace("dito","d2",$sabi);
    $sabi=str_replace("ka na ba","nb u",$sabi);
    $sabi=str_replace("ka na","n u",$sabi);
    $sabi=str_replace("hindi ba","db",$sabi);
    $sabi=str_replace("di ba","db",$sabi);
    $sabi=str_replace("di ","d ",$sabi);
    $sabi=str_replace("ngayon","ngaun",$sabi);
    $sabi=str_replace("text","txt",$sabi);
    $sabi=str_replace("to you","2u",$sabi);
    $sabi=str_replace("ayo ","au ",$sabi);
    $sabi=str_replace("ife","yf",$sabi);
    $sabi=str_replace("oo ","uu ",$sabi);
    $sabi=str_replace("nandito","nnd2",$sabi);
    $sabi=str_replace("yon","yn",$sabi);
    $sabi=str_replace("who","hu",$sabi);
    $sabi=str_replace("what","wat",$sabi);
    $sabi=str_replace("when","wen",$sabi);
    $sabi=str_replace("where","wer",$sabi);
    $sabi=str_replace("yan","yn",$sabi);
    $sabi=str_replace("punta","pnta",$sabi);
    $sabi=str_replace(" am "," m ",$sabi);
    $sabi=str_replace("good morning","gudam",$sabi);
    $sabi=str_replace("good afternoon","gudpm",$sabi);
    $sabi=str_replace("good evening","gudpm",$sabi);
    $sabi=str_replace("hello","eow p0h",$sabi);
    $sabi=str_replace("sige","cge",$sabi);
    $sabi=str_replace("sure","xur",$sabi);
    $sabi=str_replace("happy","hpi",$sabi);
    $sabi=str_replace("na ba","nb",$sabi);
    $sabi=str_replace("yung","ung",$sabi);
    $sabi=str_replace("friend","friendship",$sabi);
	$sabi=str_replace("ti","t",$sabi);
	$sabi=str_replace("bi","b",$sabi);
    $sabi=str_replace("baby","beybi",$sabi);
    $sabi=str_replace("babes","bebs",$sabi);
    $sabi=str_replace("to you","2u",$sabi);
    $sabi=str_replace("for you","4u",$sabi);
    $sabi=str_replace("mong"," u ",$sabi);
    $sabi=str_replace(" mo "," u ",$sabi);
	$sabi=str_replace(" si "," c ",$sabi);
	$sabi=str_replace(" sina "," cna ",$sabi);
	$sabi=str_replace("to","2",$sabi);
    $sabi=str_replace("you","u",$sabi);
    $sabi=str_replace("."," p0h.",$sabi);
    $sabi=str_replace("?",", n0h?",$sabi);
    $sabi=str_replace("!"," lolz!",$sabi);
    $sabi=str_replace("tu","2",$sabi);
    $sabi=str_replace("night","nyt",$sabi);
    $sabi=str_replace("saan","sn",$sabi);
    $sabi=str_replace("kailan","klan",$sabi);
    $sabi=str_replace("paano","pnu",$sabi);
    $sabi=str_replace("bakit","y",$sabi);
    $sabi=str_replace("sinu-sino","cnucnu",$sabi);
    $sabi=str_replace("sino-sino","cnucnu",$sabi);
    $sabi=str_replace("nu ang","nu",$sabi);
    $sabi=str_replace("friendster","frndstr",$sabi);
    $sabi=str_replace("testimonial","testi",$sabi);
    $sabi=str_replace("really","rly",$sabi);
    $sabi=str_replace("sino","cnu",$sabi);
    $sabi=str_replace("jared","pogi",$sabi);
    $sabi=str_replace("guissmo","gwapo",$sabi);
    $sabi=str_replace("ikaw","u",$sabi);
    $sabi=str_replace("ako","aq",$sabi);
    $sabi=str_replace(" ko"," q",$sabi);
    $sabi=str_replace(" and "," nd ",$sabi);
	$sabi=str_replace("hin","hn",$sabi);
    $sabi=str_replace("hai","zzhzaizz",$sabi);
    $sabi=str_replace("lai","zzlzaizz",$sabi);
    $sabi=str_replace("kai","zzkzaizz",$sabi);
    $sabi=str_replace("nai","zznzaizz",$sabi);
    $sabi=str_replace("bai","zzbzaizz",$sabi);
    $sabi=str_replace("gai","zzgzaizz",$sabi);
    $sabi=str_replace("mai","zzmzaizz",$sabi);
    $sabi=str_replace("wai","zzwzaizz",$sabi);
    $sabi=str_replace("pai","zzpzaizz",$sabi);
    $sabi=str_replace("sai","zzpzaizz",$sabi);
    $sabi=str_replace("haa","zzhzaazz",$sabi);
    $sabi=str_replace("laa","zzlzaazz",$sabi);
    $sabi=str_replace("kaa","zzkzaazz",$sabi);
    $sabi=str_replace("naa","zznzaazz",$sabi);
    $sabi=str_replace("baa","zzbzaazz",$sabi);
    $sabi=str_replace("gaa","zzgzaazz",$sabi);
    $sabi=str_replace("maa","zzmzaazz",$sabi);
    $sabi=str_replace("waa","zzwzaazz",$sabi);
    $sabi=str_replace("paa","zzpzaazz",$sabi);
    $sabi=str_replace("saa","zzpzaazz",$sabi);
    $sabi=str_replace("na ","zznzazz",$sabi);
    $sabi=str_replace("ba ","zzbzazz",$sabi);
    $sabi=str_replace("ga ","zzgzazz",$sabi);
    $sabi=str_replace("ma ","zzmzazz",$sabi);
    $sabi=str_replace("wa ","zzwzazz",$sabi);
    $sabi=str_replace("pa ","zzpzazz",$sabi);
    $sabi=str_replace("ha ","zzhzazz",$sabi);
    $sabi=str_replace("ka ","zzkzazz",$sabi);
    $sabi=str_replace("sa ","zzszazz",$sabi);
    $sabi=str_replace("na","n",$sabi);
    $sabi=str_replace("ba","b",$sabi);
    $sabi=str_replace("ga","g",$sabi);
    $sabi=str_replace("ma","m",$sabi);
    $sabi=str_replace("wa","w",$sabi);
    $sabi=str_replace("pa","p",$sabi);
    $sabi=str_replace("ka","k",$sabi);
    $sabi=str_replace("sa","s",$sabi);
    $sabi=str_replace("zzkzazz","ka ",$sabi);
    $sabi=str_replace("zznzazz","na ",$sabi);
    $sabi=str_replace("zzbzazz","ba ",$sabi);
    $sabi=str_replace("zzgzazz","ga ",$sabi);
    $sabi=str_replace("zzmzazz","ma ",$sabi);
    $sabi=str_replace("zzwzazz","wa ",$sabi);
    $sabi=str_replace("zzpzazz","pa ",$sabi);
    $sabi=str_replace("zzszazz","sa ",$sabi);
    $sabi=str_replace("zzhzazz","ha ",$sabi);
    $sabi=str_replace("zzkzazz","ka ",$sabi);
    $sabi=str_replace("zznzaizz","nai",$sabi);
    $sabi=str_replace("zzbzaizz","bai",$sabi);
    $sabi=str_replace("zzgzaizz","gai",$sabi);
    $sabi=str_replace("zzmzaizz","mai",$sabi);
    $sabi=str_replace("zzwzaizz","wai",$sabi);
    $sabi=str_replace("zzpzaizz","pai",$sabi);
    $sabi=str_replace("zzhzaizz","hai",$sabi);
    $sabi=str_replace("zzlzaizz","lai",$sabi);
    $sabi=str_replace("zzkzaizz","kai",$sabi);
    $sabi=str_replace("zzszaizz","sai",$sabi);
    $sabi=str_replace("zznzaazz","naa",$sabi);
    $sabi=str_replace("zzbzaazz","baa",$sabi);
    $sabi=str_replace("zzgzaazz","gaa",$sabi);
    $sabi=str_replace("zzmzaazz","maa",$sabi);
    $sabi=str_replace("zzwzaazz","waa",$sabi);
    $sabi=str_replace("zzpzaazz","paa",$sabi);
    $sabi=str_replace("zzhzaazz","haa",$sabi);
    $sabi=str_replace("zzlzaazz","laa",$sabi);
    $sabi=str_replace("zzkzaazz","kaa",$sabi);
    $sabi=str_replace("zzszaazz","saa",$sabi); 
	$sabi = str_replace("vkh","vkah",$sabi);
    $sabi=str_replace(" the "," d ",$sabi);
    $sabi=str_replace(" air","zzzairzzz",$sabi);
    $sabi=str_replace("air","r",$sabi);
    $sabi=str_replace("zzzairzzz"," air",$sabi);
    $sabi=str_replace(" ka "," u ",$sabi);
    $sabi=str_replace("who u, n0h?","hu u?",$sabi);
    $sabi=str_replace("syo","sau",$sabi);
    $sabi=str_replace(" is "," s ",$sabi);
    $sabi=str_replace(" are "," r ",$sabi);    
    $sabi=str_replace("p0h","p0wh",$sabi);
	$sabi=str_replace(" ||-||","-",$sabi);
	$sabi=str_replace(" ||,||",",",$sabi);
	$sabi=str_replace("  "," ",$sabi);
	
	$sabi=explode(' ', $sabi);
  
	foreach ($sabi as $overs)
	{
		if(rand(0,3)==0)
		{
			if($overs == "<br>")
			{
			  $overs = "~<br>";
			}
			else
			{
			  if($overs != "")
			  $overs .= "~";
			}
		}
		else
		{
			if($overs == "<br>")
			{
			  $overs = "<br>";
			}
			else
			{
				$overs .= "";
			}
		}
		
		$bits[] = $overs . " ";
	}
	
	$overs = implode('', $bits);
	$sabi = $overs;
	
	$sabi=str_replace("   "," ",$sabi);
	$sabi=str_replace("  "," ",$sabi);
	$sabi=str_replace("NEWLINEPLZ","<br>",$sabi);
	$tweet=str_replace("<br>","",$sabi);
	$tweet=str_replace("  "," ",$tweet);
	$sabi=sticky_caps($sabi);

	echo "<br>Translated: <div class=\"shit\">$sabi</div>";
	echo "<input type=\"button\" value=\"Tweet\" onClick=\"window.open('http://twitter.com/home?status=".urlencode("http://goo.gl/sTPL | ".substr($tweet,0, 119))."')\">";

?>