import React, { useState, useCallback, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Pressable,
  Modal,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import CarouselCards from "../components/CarouselCards";
import Carousel from "react-native-reanimated-carousel";
import Attendance from "../components/Attendance";
import AverageDailyScore from "../components/AverageDailyScore";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";
import {
  storeItem,
  retrieveItem,
  deleteItem,
  getAllKeys,
  saveTokenToSecureStore,
  getTokenFromSecureStore,
  saveRespDataSecureStore,
  getRespDataFromSecureStore,
} from "../database/database";
import axios from "axios";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import ModalAttendance from "../components/ModalAttendance";
import CircularProgress from "react-native-circular-progress-indicator";
import { HorizontalBarChart } from "chart-react-native";
import { VerticalBarChart } from "chart-react-native";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import { useFocusEffect } from "@react-navigation/native";
import { LoadingModal } from "react-native-loading-modal";

const DashboardParent = () => {
  const [parentName, setParentName] = useState(null);
  const [parentId, setParentId] = useState(null);
  const [responseData, setResponseData] = useState(null);
  const [childrenData, setChildrenData] = useState(null);
  const [postData, setPostData] = useState(null);
  const [currentTestArray, setCurrentTestArray] = useState([]);
  const [attendanceData, setAttendanceData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalEventsVisible, setModalEventsVisible] = useState(false);
  const [currentBooklet, setCurrentBooklet] = useState(0);
  const [loading, setLoading] = React.useState(false);
  const [modalDailyScoreVisible, setModalDailyScoreVisible] = useState(false);
  const [selectedChildData, setSelectedChildData] = useState(null);
  const [upcomingEvents, setUpcomingEvents] = useState(null);
  const [allEvents, setAllEvents] = useState([]);
  const [allDailyScore, setAllDailyScore] = useState([]);
  const [upcomingEventsFirstDate, setUpcomingEventsFirstDate] = useState(null);
  const fetchRespData = async () => {
    try {
      // Assuming getRespDataFromSecureStore is an asynchronous function
      resp = await getRespDataFromSecureStore();

      // Assuming parentId is retrieved from resp.user.parent_id
      const parentName = resp.user.name;
      const parentId = resp.user.id;
      setParentId(parentId);
      setParentName(parentName);
      const apiUrl = `https://www.balichildrenshouse.com/myCH/api/dashboard/${parentId}`;

      // Make a GET request to the API
      axios
        .get(apiUrl)
        .then((response) => {
          // Handle the successful response here
          setResponseData(response.data);

          const childrensArray = response.data.data.childrens;
          const postArray = response.data.data.posts;
          storeItem("postData", postArray);
          setChildrenData(childrensArray);
          setLoading(false);
        })
        .catch((error) => {
          // Handle any errors that occurred during the request
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    } catch (error) {
      // Handle errors
      console.error("Error fetching data:", error.message);
      setLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      setLoading(true);
      fetchRespData();
    }, [])
  );

  const handleAttendanceClick = (childData) => {
    setSelectedChildData(childData);
    setModalVisible(true);
  };
  const handleEventsClick = (eventsData) => {
    setAllEvents(eventsData);
    setModalEventsVisible(true);
  };
  const handleDailyScoreClick = (dailyScoreData) => {
    setAllDailyScore(dailyScoreData);
    setModalDailyScoreVisible(true);
  };

  return (
    <View style={styles.MainContainer}>
      <LoadingModal modalVisible={loading} color="red" />
      <View style={styles.HeaderContainer}>
        <Image
          style={{ width: 75, height: 75 }}
          // contentFit="cover"
          source={require("../assets/images/logo.png")}
        />
        <Text style={styles.GreetStyles2}>Welcome to MyCH!</Text>
        <Text style={styles.GreetStyles}>Hello {parentName} ,</Text>
      </View>
      <View style={styles.BodyContainer}>
        <View style={styles.CarouselContainer}>
          <CarouselCards />
        </View>
        <ScrollView style={styles.ScrollContainer}>
          {childrenData !== null ? (
            childrenData.map((child, index) => {
              // child.events.map((event, index) => {
              // });

              // if (!currentTestArray.includes(child.id)) {
              //   // child.id is not in currentTestArray, add it
              //   setCurrentTestArray((prevArray) => [...prevArray, child.id]);
              // }
              const now = new Date(); // current date and time
              const buttonTextStyle = {
                color: "#393939",
              };
              const upcomingEvents = child.events.filter((event) => {
                const eventStart = new Date(event.start_timestamp);
                return eventStart > now;
              });

              if (upcomingEvents.length > 0) {
                // Get the first upcoming event
                const firstUpcomingEvent = upcomingEvents[0];
                if (upcomingEvents == null) {
                  setUpcomingEvents(firstUpcomingEvent);
                }
                const rawDate = upcomingEvents[0].start_timestamp;
                const formattedDate = new Date(rawDate).toLocaleDateString(
                  "en-US",
                  {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                    timeZone: "UTC",
                  }
                );
                if (upcomingEventsFirstDate == null) {
                  setUpcomingEventsFirstDate(
                    formattedDate
                      .replace(/^[A-Za-z]+,\s/, "") // Remove day of the week (e.g., "Saturday, ")
                      .replace(/\s\d{2}:\d{2}/, "") // Remove time (e.g., " 12:34")
                      .replace(/:00 AM UTC$/, "")
                      .replace(/,/, "") // Remove the comma
                  );
                }
              } else {
                console.log("No upcoming events.");
              }

              const stepsArray = Object.entries(child.booklet.parsed_steps).map(
                ([label, date]) => ({ label, date })
              );

              let targetLabel = null;
              let indexArray = 0;

              if (
                child.bookletStudent != null &&
                child.bookletStudent.booklet_step != null
              ) {
                targetLabel = child.bookletStudent.booklet_step;
                indexArray = stepsArray.findIndex(
                  (item) => item.label === targetLabel
                );
              } else {
                indexArray = -1;
                targetLabel = "booklet student null";
              }

              return (
                <View style={styles.ChildContainer} key={index}>
                  <ScrollView horizontal style={{ flex: 1 }}>
                    <View style={styles.ChildNameContainer}>
                      <Text style={styles.ChildName}>{child.name}</Text>
                      <Text style={styles.ChildName1}>'s Dashboard</Text>
                    </View>
                  </ScrollView>
                  <View style={styles.ChildDataContainer}>
                    <View style={styles.ChildDataRow}>
                      <View style={styles.CardData}>
                        <View style={styles.CardTitle}>
                          <Text
                            style={{
                              fontSize: 18,
                              color: "#241856",
                              fontFamily: FontFamily.poppinsRegular,
                            }}
                          >
                            CH Dollar
                          </Text>
                        </View>
                        <View style={styles.CardItem}>
                          <View style={styles.BalanceStyle}>
                            <Text
                              style={{
                                fontSize: 70,
                                color: "#03a9f3",
                                bottom: 12,
                              }}
                            >
                              &cent;
                            </Text>
                            <Text style={styles.balanceStyle2}>
                              {child.flashpayBalance.balance}
                            </Text>
                          </View>
                        </View>
                      </View>
                      <TouchableOpacity
                        onPress={() =>
                          handleAttendanceClick(child.attendanceData)
                        }
                      >
                        <View style={styles.CardData}>
                          <View style={styles.CardTitle}>
                            <Text
                              style={{
                                fontSize: 18,
                                color: "#241856",
                                fontFamily: FontFamily.poppinsRegular,
                              }}
                            >
                              Attendance
                            </Text>
                          </View>
                          <View style={styles.CardItem}>
                            <CircularProgress
                              radius={43}
                              value={child.attendanceData.attendancePercentage}
                              initialValue={
                                child.attendanceData.attendancePercentage
                              }
                              progressValueColor={"black"}
                              valueSuffix={"%"}
                            />
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.ChildDataRow}>
                      <TouchableOpacity
                        onPress={() => handleEventsClick(child.events)}
                      >
                        <View style={styles.CardData}>
                          <View style={styles.CardTitle}>
                            <Text
                              style={{
                                fontSize: 18,
                                color: "#241856",
                                fontFamily: FontFamily.poppinsRegular,
                              }}
                            >
                              Events
                            </Text>
                          </View>
                          <View style={styles.CardItem}>
                            <Text
                              style={{
                                textAlign: "center",
                                fontSize: 18,
                                fontFamily: FontFamily.poppinsBold,
                              }}
                            >
                              {upcomingEventsFirstDate}
                            </Text>
                            <Text
                              style={{
                                textAlign: "center",
                                fontSize: 10,
                                fontFamily: FontFamily.poppinsRegular,
                              }}
                            >
                              {upcomingEvents[0].title}
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() =>
                          handleDailyScoreClick(child.scoreData.subjects)
                        }
                      >
                        <View style={styles.CardData}>
                          <View style={styles.CardTitle}>
                            <Text
                              style={{
                                fontSize: 18,
                                color: "#241856",
                                fontFamily: FontFamily.poppinsRegular,
                              }}
                            >
                              Daily Score
                            </Text>
                          </View>
                          <View style={styles.CardItem}>
                            <Image
                              style={{ width: 103, height: 103 }}
                              source={require("../assets/images/DailyScore.png")}
                              contentFit="cover"
                            />
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.BookletContainer}>
                    <Text>Booklet Progress</Text>
                  </View>
                  <ScrollView horizontal style={{ flex: 1 }}>
                    <ProgressSteps activeStep={indexArray + 1}>
                      {stepsArray.map((parse, index) => {
                        return (
                          <ProgressStep
                            key={index} // Add a unique key prop for each ProgressStep
                            nextBtnDisabled
                            previousBtnDisabled
                            removeBtnRow
                            scrollViewProps
                            label={parse.label}
                          ></ProgressStep>
                        );
                      })}
                    </ProgressSteps>
                  </ScrollView>
                </View>
              );
            })
          ) : (
            <Text>Loading...</Text>
          )}
        </ScrollView>
      </View>
      {(() => {
        if (selectedChildData) {
          const chartData = [
            {
              name: "Present",
              population: selectedChildData.totalPresent,
              color: "#21d375",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15,
              fontFamily: FontFamily.poppinsSemiBold,
            },
            {
              name: "Absent",
              population: selectedChildData.totalAbsent,
              color: "#F00",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15,
            },
            {
              name: "Excused",
              population: selectedChildData.totalExcused,
              color: "#FFF200",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15,
            },
          ];

          const chartConfig = {
            backgroundGradientFrom: "#1E2923",
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: "#08130D",
            backgroundGradientToOpacity: 0.5,
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            strokeWidth: 2,
            barPercentage: 0.5,
            useShadowColorFromDataset: false,
          };

          return (
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => setModalVisible(!modalVisible)}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <PieChart
                    data={chartData}
                    width={400}
                    height={200}
                    chartConfig={chartConfig}
                    accessor={"population"}
                    backgroundColor={"transparent"}
                    paddingLeft={"0"}
                    center={[20, 0]}
                    absolute
                  />
                  {/* Add your modal content here */}
                  {/* <Text>
              Percentage : {selectedChildData.attendancePercentage}
            </Text>
            <Text>totalAbsent : {selectedChildData.totalAbsent}</Text>
            <Text>totalExcused : {selectedChildData.totalExcused}</Text>
            <Text>totalPresent : {selectedChildData.totalPresent}</Text> */}
                  {/* Uncomment the PieChart component if needed */}

                  {/* Add a button to close the modal */}
                  <Pressable onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.closeButton}>Close</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          );
        } else {
          return null; // or any other fallback UI for when selectedChildData is null
        }
      })()}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalEventsVisible}
        onRequestClose={() => setModalEventsVisible(!modalEventsVisible)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Add your modal content here */}
            <ScrollView contentContainerStyle={styles.scrollEventViewContent}>
              <View style={styles.outerContainerEvent}>
                {allEvents.map((event, index) => (
                  <View key={index} style={styles.innerContainerEvent}>
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 18,
                        fontFamily: FontFamily.poppinsBold,
                      }}
                    >
                      {
                        new Date(event.start_timestamp)
                          .toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                            timeZone: "UTC",
                          })
                          .replace(/^[A-Za-z]+,\s/, "") // Remove day of the week (e.g., "Saturday, ")
                          .replace(/\s\d{2}:\d{2}/, "") // Remove time (e.g., " 12:34")
                          .replace(/:00 AM UTC$/, "")
                          .replace(/,/, "") // Remove the comma
                      }
                    </Text>
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 10,
                        fontFamily: FontFamily.poppinsRegular,
                      }}
                    >
                      {event.title}
                    </Text>
                  </View>
                ))}
              </View>
            </ScrollView>
            {/* Uncomment the PieChart component if needed */}

            {/* Add a button to close the modal */}
            <Pressable
              onPress={() => setModalEventsVisible(!modalEventsVisible)}
            >
              <Text style={styles.closeButton}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {(() => {
        if (modalDailyScoreVisible) {
          const dataAverageScore = allDailyScore.map((score, index) => ({
            label: score.title,
            length: score.avg_score,
          }));

          const dataAverageScoreClass = allDailyScore.map((score, index) => ({
            label: score.title,
            length: score.class_avg,
          }));

          return (
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalDailyScoreVisible}
              onRequestClose={() =>
                setModalDailyScoreVisible(!modalDailyScoreVisible)
              }
            >
              <View style={styles.modalContainer1}>
                <View
                  style={{
                    height: 500,
                    width: 350,
                    backgroundColor: "white",
                    borderRadius: 15,
                  }}
                >
                  {/* Uncomment the PieChart component if needed */}
                  <View style={styles.container}>
                    <ScrollView>
                      <View style={{ flex: 1 }}>
                        <View
                          style={{
                            height: 250,
                            width: 350,
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 15,
                              fontFamily: FontFamily.poppinsSemiBold,
                            }}
                          >
                            My Score
                          </Text>
                          <HorizontalBarChart
                            data={dataAverageScore}
                            style={{
                              borderBottomWidth: 1,
                              borderColor: "#bdbdbd",
                            }}
                          />
                        </View>
                      </View>

                      <View style={{ flex: 1 }}>
                        <View
                          style={{
                            height: 250,
                            width: 350,
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 15,
                              fontFamily: FontFamily.poppinsSemiBold,
                            }}
                          >
                            Class Average
                          </Text>
                          <HorizontalBarChart
                            data={dataAverageScoreClass}
                            style={{
                              borderBottomWidth: 1,
                              borderColor: "#bdbdbd",
                            }}
                          />
                        </View>
                      </View>
                    </ScrollView>
                  </View>
                  {/* Add a button to close the modal */}
                  <Pressable
                    onPress={() =>
                      setModalDailyScoreVisible(!modalDailyScoreVisible)
                    }
                  >
                    <Text style={styles.closeButton}>Close</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          );
        } else {
          return null; // or any other fallback UI for when selectedChildData is null
        }
      })()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeeeee",
  },
  scrollEventViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  outerContainerEvent: {
    alignItems: "center",
    width: 300,
    minHeight: 500, // Changed height to minHeight
  },
  innerContainerEvent: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 1,
    marginBottom: 25,
    elevation: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#979797",
    width: 200,
    height: 200,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent1: {
    width: 350,
    height: 500,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: 350,
    height: 350,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    marginTop: 10,
    color: "blue",
    textAlign: "center",
  },
  CardItem: {
    flex: 0.7,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  CardTitle: {
    backgroundColor: "#d5d5d5",
    height: "100%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flex: 0.3,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  BalanceStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  balanceStyle2: {
    marginLeft: 13,
    fontSize: 25,
    fontFamily: FontFamily.poppinsSemiBold,
  },
  MainContainer: {
    paddingHorizontal: 20,
    flex: 1,
  },
  ChildDataRow: {
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  CardData: {
    borderRadius: 20,
    width: 165,
    height: 165,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  GreetStyles: {
    fontSize: 15,
    fontFamily: FontFamily.poppinsRegular,
    color: "#8696BB",
  },
  ChildName: {
    fontSize: 15,
    fontFamily: FontFamily.poppinsSemiBold,
    color: "#11336D",
  },
  ChildName1: {
    fontSize: 15,
    fontFamily: FontFamily.poppinsRegular,
    color: "#11336D",
  },
  GreetStyles2: {
    fontSize: 20,
    fontFamily: FontFamily.poppinsBold,
    color: "#241856",
  },
  HeaderContainer: {
    flex: 0.2,
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  BodyContainer: {
    flex: 0.9,
    // backgroundColor: "green",
  },
  CarouselContainer: {
    flex: 0.5,
    // backgroundColor: "Yellow",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 500,
  },
  ScrollContainer: {
    flexDirection: "column",
    flex: 0.7,
    // backgroundColor: "cyan",
  },
  childtesting: {
    height: 250,
    width: 250,
  },
  ChildNameContainer: {
    height: 40,
    width: "100%",
    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  ChildDataContainer: {
    paddingTop: 10,
    height: 370,
    width: "100%",
    // backgroundColor: "yellow",
  },
  BookletContainer: {
    width: "100%",
    height: 50,
    // backgroundColor: "green",
  },
});

export default DashboardParent;
