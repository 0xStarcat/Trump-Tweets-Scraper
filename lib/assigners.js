
var missing = []
var assign = function(entity) {
  var g = ["f", "m", "n"]
  var c = ["groups and political organizations", "television shows", "media organizations", "journalists and other media figures", "democratic politicians", "democratic presidential candidates", "republican politicians", "republican presidential candidates", "celebrities", "places", "other people", "other"]

  switch (entity.name) {
    case "‘Politically correct fools’":
      entity.gender = g[2]
      entity.category = c[0]
      return entity
    break
    case "“Hamilton”":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "“Inside Politics”":
      entity.gender = g[2]
      entity.category = c[1]
      return entity
    break
    case "“Meet the Press”":
      entity.gender = g[2]
      entity.category = c[1]
      return entity
    break
    case "“Morning Joe”":
      entity.gender = g[2]
      entity.category = c[1]
      return entity
    break
    case "“New Day”":
      entity.gender = g[2]
      entity.category = c[1]
      return entity
    break
    case "“Rockin’ in the Free World”":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "“Saturday Night Live”":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "“Super PACs”":
      entity.gender = g[2]
      entity.category = c[0]
      return entity
    break
    case "“The Bias-Free Language Guide”":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "“The Last Word with Lawrence O'Donnell”":
      entity.gender = g[2]
      entity.category = c[1]
      return entity
    break
    case "“The O'Reilly Factor”":
      entity.gender = g[2]
      entity.category = c[1]
      return entity
    break
    case "“The Triumph of William McKinley”":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "“The View”":
      entity.gender = g[2]
      entity.category = c[1]
      return entity
    break
    case "“World News Tonight”":
      entity.gender = g[2]
      entity.category = c[1]
      return entity
    break
    case "9th Circuit Court of Appeals":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "A podium in the Oval Office":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "ABC News":
      entity.gender = g[2]
      entity.category = c[2]
      return entity
    break
    case "ABC News Politics":
      entity.gender = g[2]
      entity.category = c[2]
      return entity
    break
    case "ABC News-Washington Post poll":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Alec Baldwin":
      entity.gender = g[1]
      entity.category = c[8]
      return entity
    break
    case "Alicia Machado":
      entity.gender = g[0]
      entity.category = c[10]
      return entity
    break
    case "Alisyn Camerota":
      entity.gender = g[0]
      entity.category = c[3]
      return entity
    break
    case '"All Business: The Essential Donald Trump"':
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Alwaleed bin Talal":
      entity.gender = g[1]
      entity.category = c[10]
      return entity
    break
    case "Amazon":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Amy Chozick":
      entity.gender = g[0]
      entity.category = c[3]
      return entity
    break
    case "Ana Navarro":
      entity.gender = g[0]
      entity.category = c[3]
      return entity
    break
    case "Anderson Cooper":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Anderson Cooper “360”":
      entity.gender = g[2]
      entity.category = c[1]
      return entity
    break
    case "Angela Merkel":
      entity.gender = g[0]
      entity.category = c[10]
      return entity
    break
    case "Anthony D. Weiner":
      entity.gender = g[1]
      entity.category = c[4]
      return entity
    break
    case "Arianna Huffington":
      entity.gender = g[0]
      entity.category = c[3]
      return entity
    break
    case "Arnold Schwarzenegger":
      entity.gender = g[1]
      entity.category = c[8]
      return entity
    break
    case "Assault allegations":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Bakari Sellers":
      entity.gender = g[1]
      entity.category = c[4]
      return entity
    break
    case "Bandon Dunes Golf Resort":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Barbara Res":
      entity.gender = g[0]
      entity.category = c[10]
      return entity
    break
    case "Ben Cardin":
      entity.gender = g[1]
      entity.category = c[4]
      return entity
    break
    case "Ben Carson":
      entity.gender = g[1]
      entity.category = c[7]
      return entity
    break
    case "Ben Sasse":
      entity.gender = g[1]
      entity.category = c[6]
      return entity
    break
    case "Ben Schreckinger":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Bernard Goldberg":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Bernie Sanders":
      entity.gender = g[1]
      entity.category = c[5]
      return entity
    break
    case "Bill and Hillary Clinton":
      entity.gender = g[2]
      entity.category = c[4]
      return entity
    break
    case "Bill Clinton":
      entity.gender = g[1]
      entity.category = c[4]
      return entity
    break
    case "Bill de Blasio":
      entity.gender = g[1]
      entity.category = c[4]
      return entity
    break
    case "Bill Kristol":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Bob Vander Plaats":
      entity.gender = g[1]
      entity.category = c[10]
      return entity
    break
    case "Bobby Jindal":
      entity.gender = g[1]
      entity.category = c[7]
      return entity
    break
    case "Brandon Victor Dixon":
      entity.gender = g[1]
      entity.category = c[8]
      return entity
    break
    case "Brent Bozell":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Brit Hume":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Britain":
      entity.gender = g[2]
      entity.category = c[9]
      return entity
    break
    case "Carl Cameron":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Carly Fiorina":
      entity.gender = g[0]
      entity.category = c[7]
      return entity
    break
    case "CBS":
      entity.gender = g[2]
      entity.category = c[2]
      return entity
    break
    case "Charles Blow":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Charles Koch":
      entity.gender = g[1]
      entity.category = c[10]
      return entity
    break
    case "Charles Krauthammer":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Charles Lane":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Cheri Jacobus":
      entity.gender = g[0]
      entity.category = c[10]
      return entity
    break
    case "Chicago":
      entity.gender = g[2]
      entity.category = c[9]
      return entity
    break
    case "China":
      entity.gender = g[2]
      entity.category = c[9]
      return entity
    break
    case "Chris Christie":
      entity.gender = g[1]
      entity.category = c[7]
      return entity
    break
    case "Chris Cuomo":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Chris Stirewalt":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Chuck Jones":
      entity.gender = g[1]
      entity.category = c[10]
      return entity
    break
    case "Chuck Schumer":
      entity.gender = g[1]
      entity.category = c[4]
      return entity
    break
    case "Chuck Todd":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Clare O'Connor":
      entity.gender = g[0]
      entity.category = c[3]
      return entity
    break
    case "Club for Growth":
      entity.gender = g[2]
      entity.category = c[0]
      return entity
    break
    case "CNBC":
      entity.gender = g[2]
      entity.category = c[2]
      return entity
    break
    case "CNN":
      entity.gender = g[2]
      entity.category = c[2]
      return entity
    break
    case "CNN panelists":
      entity.gender = g[2]
      entity.category = c[10]
      return entity
    break
    case "Cokie Roberts":
      entity.gender = g[0]
      entity.category = c[3]
      return entity
    break
    case "Colin Powell":
      entity.gender = g[1]
      entity.category = c[10]
      return entity
    break
    case "Common Core standards":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Congressional town hall meetings":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Cory Booker":
      entity.gender = g[1]
      entity.category = c[4]
      return entity
    break
    case "Court order halting immigration ban":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Dan Henninger":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Dana Perino":
      entity.gender = g[0]
      entity.category = c[10]
      return entity
    break
    case "David Brooks":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "David Cay Johnston":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "David Gregory":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Debates":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Debbie Wasserman Schultz":
      entity.gender = g[0]
      entity.category = c[4]
      return entity
    break
    case "Democratic National Committee":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Democratic National Convention":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Democratic presidential candidates":
      entity.gender = g[2]
      entity.category = c[0]
      return entity
    break
    case "Democrats":
      entity.gender = g[2]
      entity.category = c[0]
      return entity
    break
    case "Don Lemon":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Donald Trump opposition":
      entity.gender = g[2]
      entity.category = c[0]
      return entity
    break
    case "Donna Brazile":
      entity.gender = g[0]
      entity.category = c[10]
      return entity
    break
    case "Donny Deutsch":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Early voting in Florida":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Election for chairman of the Democratic National Committee":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Election pollsters":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Elizabeth Beck":
      entity.gender = g[0]
      entity.category = c[10]
      return entity
    break
    case "Elizabeth Warren":
      entity.gender = g[0]
      entity.category = c[4]
      return entity
    break
    case "Erick Erickson":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Errol Louis":
      entity.gender = g[1]
      entity.category = c[10]
      return entity
    break
    case "European leaders":
      entity.gender = g[2]
      entity.category = c[0]
      return entity
    break
    case "F.B.I.":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Forbes":
      entity.gender = g[2]
      entity.category = c[2]
      return entity
    break
    case "Fortune":
      entity.gender = g[2]
      entity.category = c[2]
      return entity
    break
    case "Fox News":
      entity.gender = g[2]
      entity.category = c[2]
      return entity
    break
    case "Fox News polls":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Frank Bruni":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Frank Luntz":
      entity.gender = g[1]
      entity.category = c[10]
      return entity
    break
    case "Frank VanderSloot":
      entity.gender = g[1]
      entity.category = c[10]
      return entity
    break
    case "George Bush":
      entity.gender = g[1]
      entity.category = c[6]
      return entity
    break
    case "George Pataki":
      entity.gender = g[1]
      entity.category = c[7]
      return entity
    break
    case "George W. Bush":
      entity.gender = g[1]
      entity.category = c[6]
      return entity
    break
    case "George Will":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Germany":
      entity.gender = g[2]
      entity.category = c[9]
      return entity
    break
    case "Glenn Beck":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Gonzalo P. Curiel":
      entity.gender = g[1]
      entity.category = c[10]
      return entity
    break
    case "Graydon Carter":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Hallie Jackson":
      entity.gender = g[0]
      entity.category = c[3]
      return entity
    break
    case "Harry Hurt III":
      entity.gender = g[1]
      entity.category = c[10]
      return entity
    break
    case "Haters":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Hillary Clinton":
      entity.gender = g[0]
      entity.category = c[5]
      return entity
    break
    case "Hugh Hewitt":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Huma Abedin":
      entity.gender = g[0]
      entity.category = c[10]
      return entity
    break
    case "Illegal immigration":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Internal Revenue Service":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Investigation of Hillary Clinton's email":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Iran":
      entity.gender = g[2]
      entity.category = c[9]
      return entity
    break
    case "Islamic State":
      entity.gender = g[2]
      entity.category = c[0]
      return entity
    break
    case "James Comey":
      entity.gender = g[1]
      entity.category = c[10]
      return entity
    break
    case "James Robart":
      entity.gender = g[1]
      entity.category = c[10]
      return entity
    break
    case "Jeb Bush":
      entity.gender = g[1]
      entity.category = c[7]
      return entity
    break
    case "Jeb Bush campaign ":
      entity.gender = g[2]
      entity.category = c[0]
      return entity
    break
    case "Jeb Bush campaign staffer ":
      entity.gender = g[2]
      entity.category = c[10]
      return entity
    break
    case "Jeb Bush supporters ":
      entity.gender = g[2]
      entity.category = c[0]
      return entity
    break
    case "Jeff Flake":
      entity.gender = g[1]
      entity.category = c[6]
      return entity
    break
    case "Jeff Horwitz":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Jeff Zeleny":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Jeff Zucker":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Jennifer Rubin":
      entity.gender = g[0]
      entity.category = c[3]
      return entity
    break
    case "Joe McQuaid":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Joe Scarborough":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "John Harwood":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "John Kasich":
      entity.gender = g[1]
      entity.category = c[7]
      return entity
    break
    case "John Kasich's ad guy":
      entity.gender = g[2]
      entity.category = c[10]
      return entity
    break
    case "John King":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "John Legere":
      entity.gender = g[1]
      entity.category = c[10]
      return entity
    break
    case "John Lewis":
      entity.gender = g[1]
      entity.category = c[4]
      return entity
    break
    case "John McCain":
      entity.gender = g[1]
      entity.category = c[6]
      return entity
    break
    case "John O. Brennan":
      entity.gender = g[1]
      entity.category = c[10]
      return entity
    break
    case "John Oliver":
      entity.gender = g[1]
      entity.category = c[8]
      return entity
    break
    case "John R. Allen":
      entity.gender = g[1]
      entity.category = c[10]
      return entity
    break
    case "John Roberts":
      entity.gender = g[1]
      entity.category = c[10]
      return entity
    break
    case "John Sununu":
      entity.gender = g[1]
      entity.category = c[6]
      return entity
    break
    case "Jonathan Martin":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Jon Ossoff":
      entity.gender = g[1]
      entity.category = c[10]
      return entity
    break
    case "Joseph R. Biden Jr.":
      entity.gender = g[1]
      entity.category = c[4]
      return entity
    break
    case "Joy Behar":
      entity.gender = g[0]
      entity.category = c[3]
      return entity
    break
    case "Juan Williams":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Karl Rove":
      entity.gender = g[1]
      entity.category = c[10]
      return entity
    break
    case "Kasie Hunt":
      entity.gender = g[0]
      entity.category = c[3]
      return entity
    break
    case "Katie Couric":
      entity.gender = g[0]
      entity.category = c[3]
      return entity
    break
    case "Katy Tur":
      entity.gender = g[0]
      entity.category = c[3]
      return entity
    break
    case "Lawrence O'Donnell":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Leaked D.N.C. emails":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Leakers of classified intelligence":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Leaks":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Lincoln Chafee":
      entity.gender = g[1]
      entity.category = c[5]
      return entity
    break
    case "Lindsey Graham":
      entity.gender = g[1]
      entity.category = c[7]
      return entity
    break
    case "Lisa Belkin":
      entity.gender = g[0]
      entity.category = c[3]
      return entity
    break
    case "Lockheed Martin F-35 Program":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Macy's":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Maggie Haberman":
      entity.gender = g[0]
      entity.category = c[3]
      return entity
    break
    case "Major Garrett":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Major League Baseball":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Marc Thiessen":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Marco Rubio":
      entity.gender = g[1]
      entity.category = c[7]
      return entity
    break
    case "Mark Cuban":
      entity.gender = g[1]
      entity.category = c[10]
      return entity
    break
    case "Mark Halperin":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Martin O'Malley":
      entity.gender = g[1]
      entity.category = c[5]
      return entity
    break
    case "Marty Walsh":
      entity.gender = g[1]
      entity.category = c[4]
      return entity
    break
    case "Mary Katharine Ham":
      entity.gender = g[0]
      entity.category = c[3]
      return entity
    break
    case "Matt Bai":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Maureen Dowd":
      entity.gender = g[0]
      entity.category = c[3]
      return entity
    break
    case "Meghan McCain":
      entity.gender = g[0]
      entity.category = c[3]
      return entity
    break
    case "Megyn Kelly":
      entity.gender = g[0]
      entity.category = c[3]
      return entity
    break
    case "Melinda Henneberger":
      entity.gender = g[0]
      entity.category = c[3]
      return entity
    break
    case "Meryl Streep":
      entity.gender = g[0]
      entity.category = c[8]
      return entity
    break
    case "Mexico":
      entity.gender = g[2]
      entity.category = c[9]
      return entity
    break
    case "Michael Barbaro":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Michael Bloomberg":
      entity.gender = g[1]
      entity.category = c[10]
      return entity
    break
    case "Michael J. Morell":
      entity.gender = g[1]
      entity.category = c[10]
      return entity
    break
    case "Michael Nutter":
      entity.gender = g[1]
      entity.category = c[4]
      return entity
    break
    case "Microphone at the first presidential debate":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Mika Brzezinski":
      entity.gender = g[0]
      entity.category = c[3]
      return entity
    break
    case "Mitt Romney":
      entity.gender = g[1]
      entity.category = c[6]
      return entity
    break
    case "Molly Sims":
      entity.gender = g[0]
      entity.category = c[3]
      return entity
    break
    case "Mort Zuckerman":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "MSNBC":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "National Review":
      entity.gender = g[2]
      entity.category = c[2]
      return entity
    break
    case "NBC":
      entity.gender = g[2]
      entity.category = c[2]
      return entity
    break
    case "NBC News":
      entity.gender = g[2]
      entity.category = c[2]
      return entity
    break
    case "“NBC Nightly News”":
      entity.gender = g[2]
      entity.category = c[2]
      return entity
    break
    case "Neil Young":
      entity.gender = g[1]
      entity.category = c[8]
      return entity
    break
    case "New 747 Air Force One":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "New Jersey":
      entity.gender = g[2]
      entity.category = c[9]
      return entity
    break
    case "New York Daily News":
      entity.gender = g[2]
      entity.category = c[2]
      return entity
    break
    case "New York Times articles ":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Nicolle Wallace":
      entity.gender = g[0]
      entity.category = c[3]
      return entity
    break
    case "Nikki Haley":
      entity.gender = g[0]
      entity.category = c[6]
      return entity
    break
    case "Nordstrom":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "North Korea":
      entity.gender = g[2]
      entity.category = c[9]
      return entity
    break
    case "North American Free Trade Agreement":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "North Atlantic Treaty Organization":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Obamacare":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Other presidential candidates":
      entity.gender = g[2]
      entity.category = c[0]
      return entity
    break
    case "Other Republican candidates":
      entity.gender = g[2]
      entity.category = c[0]
      return entity
    break
    case "Paul Begala":
      entity.gender = g[1]
      entity.category = c[10]
      return entity
    break
    case "Paul D. Ryan":
      entity.gender = g[1]
      entity.category = c[6]
      return entity
    break
    case "Paul Singer":
      entity.gender = g[1]
      entity.category = c[10]
      return entity
    break
    case "Paulina Vega":
      entity.gender = g[0]
      entity.category = c[8]
      return entity
    break
    case "Penn Jillette":
      entity.gender = g[1]
      entity.category = c[8]
      return entity
    break
    case "Political ads in Indiana":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Politicians":
      entity.gender = g[2]
      entity.category = c[0]
      return entity
    break
    case "Politico":
      entity.gender = g[2]
      entity.category = c[2]
      return entity
    break
    case "Potential collusion between Russia and members of the Trump campaign":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "President Obama":
      entity.gender = g[1]
      entity.category = c[4]
      return entity
    break
    case "Protesters":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Pundits":
      entity.gender = g[2]
      entity.category = c[0]
      return entity
    break
    case "Rand Paul":
      entity.gender = g[1]
      entity.category = c[7]
      return entity
    break
    case "Recount effort in Pennsylvania":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "RedState.com":
      entity.gender = g[2]
      entity.category = c[2]
      return entity
    break
    case "Release of prisoners from Guantanamo Bay":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Republican National Committee":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Republican Party":
      entity.gender = g[2]
      entity.category = c[0]
      return entity
    break
    case "Republican Party of Virginia":
      entity.gender = g[2]
      entity.category = c[0]
      return entity
    break
    case "Republican presidential candidates":
      entity.gender = g[2]
      entity.category = c[0]
      return entity
    break
    case "Republicans":
      entity.gender = g[2]
      entity.category = c[0]
      return entity
    break
    case "Richard Blumenthal":
      entity.gender = g[1]
      entity.category = c[4]
      return entity
    break
    case "Rich Lowry":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Rick Perry":
      entity.gender = g[1]
      entity.category = c[7]
      return entity
    break
    case "Rick Scott":
      entity.gender = g[1]
      entity.category = c[6]
      return entity
    break
    case "Rick Wilson":
      entity.gender = g[1]
      entity.category = c[10]
      return entity
    break
    case "Robert Gates":
      entity.gender = g[1]
      entity.category = c[10]
      return entity
    break
    case "Rodrigo Duterte":
      entity.gender = g[1]
      entity.category = c[10]
      return entity
    break
    case "Ronda Rousey":
      entity.gender = g[0]
      entity.category = c[8]
      return entity
    break
    case "Russell Moore":
      entity.gender = g[1]
      entity.category = c[10]
      return entity
    break
    case "Ruth Bader Ginsburg":
      entity.gender = g[0]
      entity.category = c[10]
      return entity
    break
    case "Ruth Marcus":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "S.E. Cupp":
      entity.gender = g[0]
      entity.category = c[3]
      return entity
    break
    case "Sam Liccardo":
      entity.gender = g[1]
      entity.category = c[4]
      return entity
    break
    case "Samuel L. Jackson":
      entity.gender = g[1]
      entity.category = c[8]
      return entity
    break
    case "Saudi Arabia":
      entity.gender = g[2]
      entity.category = c[9]
      return entity
    break
    case "Scott Walker":
      entity.gender = g[1]
      entity.category = c[7]
      return entity
    break
    case "Serge Kovaleski":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Shep Smith":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Snoop Dogg":
      entity.gender = g[1]
      entity.category = c[8]
      return entity
    break
    case "Sopan Deb":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Special interests":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Stephanie Rawlings-Blake":
      entity.gender = g[0]
      entity.category = c[4]
      return entity
    break
    case "Steve Rattner":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Stuart Stevens":
      entity.gender = g[1]
      entity.category = c[10]
      return entity
    break
    case "Super Bowl 50":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "T-Mobile":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Tavis Smiley":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Ted Cruz":
      entity.gender = g[1]
      entity.category = c[7]
      return entity
    break
    case "Ted Cruz campaign":
      entity.gender = g[2]
      entity.category = c[0]
      return entity
    break
    case "Ted Cruz’s Iowa caucus speech":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Television commercials":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "The 2016 election":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "The American delegate system":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "The Associated Press":
      entity.gender = g[2]
      entity.category = c[2]
      return entity
    break
    case "The Benghazi hearings":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "The Bill, Hillary and Chelsea Clinton Foundation":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "The cast of “Hamilton”":
      entity.gender = g[2]
      entity.category = c[10]
      return entity
    break
    case "The Cruz-Kasich pact":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "The Daily Beast":
      entity.gender = g[2]
      entity.category = c[2]
      return entity
    break
    case "The Democratic debate":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "The Des Moines Register":
      entity.gender = g[2]
      entity.category = c[2]
      return entity
    break
    case "The electoral process":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "The first 100 days of a presidency":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "The Freedom Caucus":
      entity.gender = g[2]
      entity.category = c[0]
      return entity
    break
    case "The Fox News debate":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "The Huffington Post":
      entity.gender = g[2]
      entity.category = c[2]
      return entity
    break
    case "The Iran nuclear deal":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "The “mainstream” media":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "The New Hampshire Union Leader":
      entity.gender = g[2]
      entity.category = c[2]
      return entity
    break
    case "The New York Times":
      entity.gender = g[2]
      entity.category = c[2]
      return entity
    break
    case "The Obama administration":
      entity.gender = g[2]
      entity.category = c[0]
      return entity
    break
    case "The public":
      entity.gender = g[2]
      entity.category = c[0]
      return entity
    break
    case "The Republican establishment":
      entity.gender = g[2]
      entity.category = c[0]
      return entity
    break
    case "The Rexnord Corporation":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "The State of the Union address":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "The United States government":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "The Wall Street Journal":
      entity.gender = g[2]
      entity.category = c[2]
      return entity
    break
    case "The Wall Street Journal editorial board":
      entity.gender = g[2]
      entity.category = c[3]
      return entity
    break
    case "The Washington Post":
      entity.gender = g[2]
      entity.category = c[2]
      return entity
    break
    case "The Weekly Standard":
      entity.gender = g[2]
      entity.category = c[2]
      return entity
    break
    case "Tim Kaine":
      entity.gender = g[1]
      entity.category = c[4]
      return entity
    break
    case "Tim O'Brien":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "“TODAY”":
      entity.gender = g[2]
      entity.category = c[1]
      return entity
    break
    case "Tom Llamas":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Tom Ridge":
      entity.gender = g[1]
      entity.category = c[6]
      return entity
    break
    case "Tony Schwartz":
      entity.gender = g[1]
      entity.category = c[10]
      return entity
    break
    case "Trans-Pacific Partnership":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Transportation Security Administration":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Trump/Russia report":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "U.S. leaders":
      entity.gender = g[2]
      entity.category = c[0]
      return entity
    break
    case "U.S. legal system":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "U.S. trade pacts":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "U.S. visa system":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "U.S.-Mexico border":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "United Nations":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "United States":
      entity.gender = g[2]
      entity.category = c[9]
      return entity
    break
    case "United States employment situation":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "The United States government ":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "United Steelworkers Local 1999":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Univision":
      entity.gender = g[2]
      entity.category = c[2]
      return entity
    break
    case "USA Today":
      entity.gender = g[2]
      entity.category = c[2]
      return entity
    break
    case "Vandals":
      entity.gender = g[2]
      entity.category = c[10]
      return entity
    break
    case "Vanity Fair":
      entity.gender = g[2]
      entity.category = c[2]
      return entity
    break
    case "Veterans Affairs":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Vote recount in Wisconsin":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Voters":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Wall Street Journal-NBC News poll":
      entity.gender = g[2]
      entity.category = c[11]
      return entity
    break
    case "Washington insiders":
      entity.gender = g[2]
      entity.category = c[0]
      return entity
    break
    case "Washington, D.C.":
      entity.gender = g[2]
      entity.category = c[9]
      return entity
    break
    case "Whoopi Goldberg":
      entity.gender = g[0]
      entity.category = c[8]
      return entity
    break
    case "Willie Geist":
      entity.gender = g[1]
      entity.category = c[3]
      return entity
    break
    case "Woody Johnson":
      entity.gender = g[1]
      entity.category = c[8]
      return entity
    break
    default:
      entity.gender = null
      entity.category = null
      missing.push(entity.name)
      return entity
    break
  }
}

module.exports = { assign, missing }
