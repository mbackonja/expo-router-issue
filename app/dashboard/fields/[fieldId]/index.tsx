import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Text>PAGE: single field without agro culture</Text>

      <Link href="/dashboard/fields">PRESS HERE to go back to all fields</Link>
    </View>
  )
}