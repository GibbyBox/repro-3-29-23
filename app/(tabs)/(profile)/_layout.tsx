import { Stack } from "expo-router";

export default function ProfileLayout() {
	return (
		<>
			<Stack.Screen options={{ headerShown: false }} />
			<Stack initialRouteName="profile/index">
				<Stack.Screen name="profile/index" options={{ title: 'Profile' }} />
				<Stack.Screen name="profile/friends" options={{ title: 'Friends via Profile' }} />
			</Stack>
		</>
	)
}