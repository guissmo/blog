<html>

<head>
	<title>
	  The Jologs-inator
	</title>
	
	<style type='text/css'>
	.mask{
	   position: relative;
	   overflow: hidden;
	   margin: 0px auto;
	   width: 100%;
	   background-color: #f4f4f4
	}
	.header{
	   float: left;
	   width: 100%;
	   background-color: #f4f4f4
	}
	.colleft{
	   position: relative;
	   width: 100%;
	   font-family: Tahoma;
	   font-size: 8pt;
	   font-weight: bold;
	}
	.col1{
	   position: absolute;
	   overflow: hidden;
	   float: left;
	   width: 48%;
	   left: 0%;
	   margin-left: 20px;
	}
	.col2{
	   position: absolute;
	   overflow: hidden;
	   float: left;
	   width: 48%;
	   left: 50%;
	   margin-left: 20px;
	}
	.footer{
	   float: left;
	   width: 100%;
	   background-color: #b4caf7
	}
	body {
	   padding: 0px;
	   margin: 0px;
	   font-size: 90%;
	   background-color: #e7e7de
	}
	
	textarea, .shit {
		width: 90%!important;
		height: 200px!important;
		overflow: auto;
		padding: 3px;
		font-size: 9pt;
		border-style: solid;
		border-color: black;
		border-width: 1px;
		background-color: white;
		font-family: Verdana;
		font-weight: normal!important;
	}
	
	input {
		border-style: solid;
		border-color: black;
		border-width: 1px;
	    background-color: #D4D4D4;
		color: black;
		font-family: Verdana;
		font-size: 8pt;
	}
	
	</style>

	<script>
	function translateo()
	{
		loadXMLDoc('translator.php');
	}
	
	function loadXMLDoc(url)
	{
	
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
	xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	/*.open("GET",url+"?id="+<?php echo $id?>,false);
	xmlhttp.send(null);*/
	
	var url = "translator.php";
	var blargh = document.form.normal.value.replace(/\n\r?/g, '<br> ');
	blargh = blargh.replace(/'/gi, '');
	blargh = blargh.replace(/"/gi, '');
	var params = "translateme="+blargh;
	
	xmlhttp.open("POST", url, true);
	
	
	//Send the proper header information along with the request
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	// xmlhttp.setRequestHeader("Content-length", params.length);
	// xmlhttp.setRequestHeader("Connection", "close");

	
	xmlhttp.onreadystatechange = function() {//Call a function when the state changes.
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			// alert(xmlhttp.responseText);
			document.getElementById('dynamic').innerHTML=xmlhttp.responseText;
		}
	}
	
	xmlhttp.send(params);

	}
	
	</script>
</head>

<body>

<form name="form" >
  <br>
  <div align="right"><b><pre>gS2 u bA tAlAGNG mgINg jolOgS, n0H? I2 aNg~ oRIG l0Lz
vErsI0N 3 Na~ 2 KyA mz DiSentE tngNn p0wh. JejejE~ p0Wh</pre></b></div><br>
  <br>
  <!--<br><pre>Normal: </pre><input type="text" name="normal" value="" size="60" rows="7"></textarea>
  <br><input type="submit" value="Translate!" onClick=translate()>
  <br><pre>Jologs: </pre><input type="text" name="jologs" value="" size="60" rows="7"></textarea>-->
  
  <div class="colleft">
	  
	  <div id="content" class="col1">
		<br>Normal: </pre><br><textarea type="text" name="normal" value="" noresize></textarea>
	    <br><input type="button" value="Translate!" onClick=translateo()>
	  </div>
	  
	  <div id="dynamic" class="col2">
	    <br>Translated: <div class="shit"></div>
	  </div>
	  
  </div>
  
</form>

  <div style="position: absolute; bottom: 1%; width: 50%">
  <br><font face="Lucida Console" size="1">&copy; guissmo 2008 2009 2010 2023</font>
  <br><font face="Lucida Console" size="1">for comments, suggestions, missed out words, email me at guissmo[at]gmail.com</font>
  <br><font face="Lucida Console" size="1">for violent reactions, hold alt then press f4 for windows</font>
  
</body>


</html>