import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Text>PAGE: fields</Text>

      <Link href={{ pathname: '/dashboard/fields/[fieldId]', params: { fieldId: 1 }}}>
        PRESS HERE to go to the single field without agro culture
      </Link>

      <Link href={{ pathname: '/dashboard/fields/[fieldId]/[agroCultureId]', params: { fieldId: 1, agroCultureId: 1 }}}>
        PRESS HERE to go to the single field with agro culture
      </Link>
    </View>
  )
}