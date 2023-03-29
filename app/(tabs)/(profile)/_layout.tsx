import { Stack } from "expo-router";

export default function ProfileLayout() {
	return (
		<Stack initialRouteName="profile/index" screenOptions={{ headerShown: false }}>
			<Stack.Screen name="profile/index" />
			<Stack.Screen name="profile/friends" />
		</Stack>
	)
}