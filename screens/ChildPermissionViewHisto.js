import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  FormControl,
  Input,
  FormControlLabel,
  NativeBaseProvider,
  Select,
  CheckIcon,
  TextArea,
} from "native-base";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import DatePickerComponent from "../components/DatePicker";
import DocumentPick from "../components/DocumentPick";
import { useNavigation } from "@react-navigation/native";
import DropDown from "../components/DropDown";
const ChildPermissionViewHisto = () => {
  const [service, setService] = React.useState("");
  const navigation = useNavigation();
  return (
    <NativeBaseProvider>
      <View style={[styles.childPermissionViewHisto, styles.lineIconLayout]}>
        <View style={[styles.content, styles.contentFlexBox]}>
          <View style={styles.backbuttonParent}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ChildPermissionHistorys")}
            >
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/vector5.png")}
              />
            </TouchableOpacity>
            <Text style={styles.rufusStewart}>Rufus Stewart</Text>
          </View>

          <View style={styles.maincontent}>
            <ScrollView>
              <View style={styles.profilepictureParent}>
                <Image
                  style={styles.profilepictureIcon}
                  contentFit="cover"
                  source={require("../assets/profilepicture.png")}
                />
                <Text
                  style={[styles.januari20231120, styles.lineIconSpaceBlock]}
                >
                  25 Januari 2023, 11:20 AM
                </Text>
                <Image
                  style={[styles.lineIcon, styles.lineIconSpaceBlock]}
                  contentFit="cover"
                  source={require("../assets/line.png")}
                />
              </View>
              <View
                style={[
                  styles.permissionDetailWrapper,
                  styles.bodycontentSpaceBlock,
                ]}
              >
                <Text style={styles.permissionDetail}>Permission Detail</Text>
              </View>
              <View style={[styles.bodycontent, styles.bodycontentSpaceBlock]}>
                {/* Form 1 ( Child ) */}
                <DropDown label="Child" />
                {/* End Form 1 ( Child ) */}
                {/* Form 2 ( Type Of Permission ) */}
                <FormControl mb="3">
                  <FormControl.Label>Type Of Permission</FormControl.Label>
                  <Select
                    selectedValue={service}
                    height="10"
                    minWidth="200"
                    accessibilityLabel="Choose Service"
                    placeholder="Choose Permission"
                    _selectedItem={{
                      bg: "teal.600",
                      endIcon: <CheckIcon size="3" />,
                    }}
                    mt={1}
                    onValueChange={(itemValue) => setService(itemValue)}
                    borderRadius="full"
                    isReadOnly={true}
                  >
                    <Select.Item label="Excused" value="excused" />
                    <Select.Item label="Sick Leave" value="sick" />
                  </Select>
                </FormControl>
                {/* End Form 2 ( Type Of Permission ) */}

                {/* Form 3 ( Date Picker ) */}
                <FormControl mb="3">
                  <FormControl.Label>From</FormControl.Label>
                  <DatePickerComponent />
                </FormControl>
                {/* End Form 3 ( Date Picker ) */}
                {/* Form 4 ( Date Picker ) */}
                <FormControl mb="3">
                  <FormControl.Label>To</FormControl.Label>
                  <DatePickerComponent />
                </FormControl>
                {/* End Form 4 ( Date Picker ) */}
                {/* Form 5 ( Document Picker ) */}
                <FormControl mb="3">
                  <FormControl.Label>Letter (Optional)</FormControl.Label>
                  <DocumentPick />
                </FormControl>
                {/* End Form 5 ( Document Picker ) */}
                {/* Form 6 ( Commment Box ) */}
                <FormControl mb="3">
                  <FormControl.Label>Note</FormControl.Label>
                  <TextArea h={40} placeholder="Leave a note" />
                </FormControl>
                {/* End Form 6 ( Comment Box ) */}
              </View>
            </ScrollView>
          </View>
          <View style={styles.btnsaveParent}>
            <TouchableOpacity style={[styles.btnsave, styles.btnsaveFlexBox]}>
              <View>
                <Text style={[styles.saveChanges, styles.deleteTypo]}>
                  Save Changes
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btndelete, styles.btnsaveFlexBox]}>
              <View>
                <Text style={[styles.delete, styles.deleteTypo]}>Delete</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  lineIconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  contentFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
  },
  lineIconSpaceBlock: {
    marginTop: 9,
    alignSelf: "stretch",
  },
  bodycontentSpaceBlock: {
    marginTop: 13,
    alignSelf: "stretch",
  },
  selectSpaceBlock: {
    marginTop: 6,
    alignSelf: "stretch",
  },
  inputBorder: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xl,
    borderWidth: 1,
    borderColor: Color.mutedMuted300,
    borderStyle: "solid",
    backgroundColor: Color.singleToneWhite,
    height: 30,
    borderRadius: Border.br_9980xl,
    alignItems: "center",
    flexDirection: "row",
  },
  placeholderTypo: {
    color: Color.textText900,
    textAlign: "left",
    fontSize: FontSize.size_4xs,
  },
  cursorLayout: {
    height: 18,
    backgroundColor: Color.primaryPrimary700,
    marginLeft: 8,
    display: "none",
  },
  childTypo: {
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_4xs,
    alignSelf: "stretch",
  },
  iconLayout: {
    height: 16,
    width: 16,
  },
  inputfieldSpaceBlock: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  btndeleteBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  textLayout: {
    width: 212,
    lineHeight: 21,
    fontSize: FontSize.textMediumSm14_size,
    fontFamily: FontFamily.textRegularSm14,
  },
  btnsaveFlexBox: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
    borderRadius: Border.br_xl,
  },
  deleteTypo: {
    fontSize: FontSize.textMediumSm14_size,
    textAlign: "center",
    fontFamily: FontFamily.headingMd20,
    fontWeight: "700",
    flex: 1,
  },
  rufusStewart: {
    fontSize: FontSize.headingMd20_size,
    lineHeight: 22,
    color: Color.colorMidnightblue,
    marginLeft: 100,
    textAlign: "center",
    fontFamily: FontFamily.headingMd20,
    fontWeight: "700",
  },
  backbuttonParent: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  profilepictureIcon: {
    width: 85,
    height: 87,
  },
  januari20231120: {
    color: Color.colorDarkgray_100,
    height: 11,
    fontFamily: FontFamily.textMediumSm14,
    fontWeight: "500",
    fontSize: FontSize.size_4xs,
    marginTop: 9,
    textAlign: "center",
  },
  lineIcon: {
    maxWidth: "100%",
    height: 1,
    overflow: "hidden",
    width: "100%",
  },
  profilepictureParent: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  permissionDetail: {
    fontSize: FontSize.textRegularMd16_size,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.textMediumSm14,
    fontWeight: "500",
    flex: 1,
  },
  permissionDetailWrapper: {
    flexDirection: "row",
  },
  placeholder: {
    fontFamily: FontFamily.textRegularSm14,
    lineHeight: 14,
    color: Color.textText900,
    flex: 1,
  },
  cursor: {
    marginLeft: 8,
    display: "none",
    flex: 1,
  },
  icons: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  inputField: {
    alignSelf: "stretch",
  },
  labelAndContaier: {
    alignSelf: "stretch",
    flex: 1,
  },
  inputRounded: {
    height: 30,
    marginTop: 6,
    borderRadius: Border.br_9980xl,
  },
  inputfield1: {
    alignSelf: "stretch",
  },
  typeOfPermission: {
    zIndex: 0,
  },
  chevronDownIcon: {
    marginLeft: 4,
    overflow: "hidden",
  },
  select: {
    zIndex: 1,
    height: 30,
    marginTop: 6,
    borderRadius: Border.br_9980xl,
  },
  bxsdownArrow: {
    top: "50%",
    left: 292,
    width: 9,
    height: 9,
    zIndex: 2,
    marginTop: 4,
    position: "absolute",
    overflow: "hidden",
  },
  placeholder2: {
    fontFamily: FontFamily.textMediumSm14,
    fontWeight: "500",
    flex: 1,
  },
  inputField3: {
    top: 0,
    left: 0,
    width: 352,
    position: "absolute",
  },
  labelAndContaier3: {
    alignSelf: "stretch",
    flex: 1,
  },
  playIcon: {
    overflow: "hidden",
  },
  placeholder4: {
    marginLeft: 8,
    fontFamily: FontFamily.textRegularSm14,
    lineHeight: 14,
    color: Color.textText900,
  },
  cursor4: {
    width: 1,
    marginLeft: 8,
    display: "none",
  },
  frame: {
    justifyContent: "flex-end",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  scroll: {
    backgroundColor: Color.textDarkSecondary,
    width: 8,
    height: 99,
    marginLeft: 4,
    display: "none",
    borderRadius: Border.br_9980xl,
  },
  defaultInputMaximumHeightParent: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.textText50,
    paddingLeft: Padding.p_xs,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_9xs,
    paddingBottom: Padding.p_5xs,
    borderColor: Color.mutedMuted300,
    borderWidth: 1,
    borderStyle: "solid",
    alignSelf: "stretch",
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
  },
  errorText: {
    color: Color.textDarkSecondary,
    textAlign: "left",
  },
  counterText: {
    color: Color.textLightSecondary,
    textAlign: "right",
  },
  helperText: {
    marginTop: 4,
    display: "none",
    flexDirection: "row",
  },
  textArea: {
    flex: 1,
  },
  inputfield6: {
    flex: 1,
  },
  bodycontent: {
    flex: 1,
  },
  maincontent: {
    height: 607,
    paddingHorizontal: 0,
    paddingVertical: 13,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  saveChanges: {
    color: Color.singleToneWhite,
  },
  btnsave: {
    backgroundColor: Color.colorTomato,
  },
  delete: {
    color: Color.colorGray_200,
  },
  btndelete: {
    borderColor: Color.colorGray_200,
    marginLeft: 23,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.singleToneWhite,
    padding: Padding.p_3xs,
    justifyContent: "center",
  },
  btnsaveParent: {
    height: 41,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  content: {
    flex: 1,
  },
  childPermissionViewHisto: {
    backgroundColor: Color.colorGray_100,
    height: 844,
    paddingHorizontal: Padding.p_lgi,
    paddingVertical: Padding.p_23xl,
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
    borderRadius: Border.br_xl,
    width: "100%",
  },
});

export default ChildPermissionViewHisto;
