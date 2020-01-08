import S from '@sanity/desk-tool/structure-builder'
import {MdSettings, MdFolder, MdMap} from 'react-icons/md/'

const hiddenDocTypes = listItem =>
  !['category', 'author', 'post', 'page', 'siteSettings'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.documentListItem()
                .id('prospectiveFamilies')
                .title('Prospective Families')
                .schemaType('page'),
              S.listItem()
                .title('Prospective Families Section Pages')
                .child(
                  S.list()
                    .title('Prospective Families Section Pages')
                    .items([
                      S.documentListItem()
                        .id('programs')
                        .title('Programs')
                        .schemaType('page'),
                      S.listItem()
                        .title('Program Pages')
                        .id('programsPages')
                        .child(
                          S.list()
                            .title('Programs Pages')
                            .items([
                              S.documentListItem()
                                .id('trialSessions')
                                .title('Trial Sessions')
                                .schemaType('page'),
                              S.documentListItem()
                                .id('overnightCamp')
                                .title('Overnight Camp (2nd-9th)')
                                .schemaType('page'),
                              S.documentListItem()
                                .id('dayCamp')
                                .title('Day Camp (K-7th)')
                                .schemaType('page'),
                              S.documentListItem()
                                .id('bonimTravelProgram')
                                .title('Bonim Travel (10th)')
                                .schemaType('page'),
                              S.documentListItem()
                                .id('sitProgram')
                                .title('SIT Program (11th)')
                                .schemaType('page'),
                              S.documentListItem()
                                .id('specialtyCamps')
                                .title('Specialty Camps')
                                .schemaType('page')
                            ])
                        )
                        .icon(MdFolder),
                      S.documentListItem()
                        .id('activities')
                        .title('Activities')
                        .schemaType('page'),
                      S.listItem()
                        .title('Activities Pages')
                        .id('activitiesPages')
                        .child(
                          S.list()
                            .title('Activities Pages')
                            .items([
                              S.documentListItem()
                                .id('tripsSpecialEvents')
                                .title('Trips & Special Events')
                                .schemaType('page'),
                              S.documentListItem()
                                .id('jewishLife')
                                .title('Jewish Life')
                                .schemaType('page'),
                              S.documentListItem()
                                .id('typicalDay')
                                .title('A Typical Day')
                                .schemaType('page')
                            ])
                        )
                        .icon(MdFolder),
                      S.documentListItem()
                        .id('foodHealthSafety')
                        .title('Food, Health & Safety')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('prospectiveToursEvents')
                        .title('Tours & Events')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('faqs')
                        .title('FAQs')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('datesAndRatesProspective')
                        .title('Overnight Dates & Rates')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('datesRatesProspectiveDayCamp')
                        .title('Day Camp Dates & Rates')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('tuitionAssistance')
                        .title('Tuition Assistance')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('scheduleTour')
                        .title('Schedule Tour')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('requestInfo')
                        .title('Request Info')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('enrollNow')
                        .title('Enroll Now')
                        .schemaType('page')
                    ])
                )
                .icon(MdFolder),
              S.documentListItem()
                .id('about')
                .title('About')
                .schemaType('page'),
              S.listItem()
                .title('About Section Pages')
                .id('aboutSection')
                .child(
                  S.list()
                    .title('About Section Pages')
                    .items([
                      S.documentListItem()
                        .id('laurelwoodExperience')
                        .title('The Laurelwood Experience')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('ourStaff')
                        .title('Our Staff')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('letterFromTheDirector')
                        .title('letterFromTheDirector')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('boardOfDirectors')
                        .title('Board of Directors')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('alumni')
                        .title('Alumni')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('alumniEvents')
                        .title('Alumni Events')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('campNewsletter')
                        .title('Camp Newsletter')
                        .schemaType('page')
                    ])
                )
                .icon(MdFolder),
              S.documentListItem()
                .id('currentFamilies')
                .title('Current Families')
                .schemaType('page'),
              S.listItem()
                .title('Current Families Section Pages')
                .child(
                  S.list()
                    .title('Current Families Section Pages')
                    .items([
                      S.documentListItem()
                        .id('upcomingEventsCurrentFamilies')
                        .title('Upcoming Events')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('parentLogin')
                        .title('Parent Log-in')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('donate')
                        .title('Donate')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('referAFriend')
                        .title('Refer a Friend')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('whatsNew')
                        .title('New for 2020')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('campStore')
                        .title('Camp Store')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('amazonSmile')
                        .title('Amazon Smile')
                        .schemaType('page')
                    ])
                ),
              S.documentListItem()
                .id('eventsRetreats')
                .title('Private Events & Retreats')
                .schemaType('page')
            ])),
      S.listItem()
        .title('News Items')
        .schemaType('post')
        .child(S.documentTypeList('post').title('News Items')),
      S.listItem()
        .title('Interactive Map')
        .icon(MdMap)
        .schemaType('mapMarker')
        .child(S.documentTypeList('mapMarker').title('Map Markers')),
      // S.listItem()
      //   .title('Authors')
      //   .icon(MdPerson)
      //   .schemaType('author')
      //   .child(S.documentTypeList('author').title('Authors')),
      // S.listItem()
      //   .title('Categories')
      //   .schemaType('category')
      //   .child(S.documentTypeList('category').title('Categories')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
